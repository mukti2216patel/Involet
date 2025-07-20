const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
const zod = require('zod');

const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
});

const registerSchema = zod.object({
  name: zod.string().min(2),
  email: zod.string().email(),
  password: zod.string().min(8),
  picture: zod.string().optional(),
  googleId: zod.string().optional(),
});

const googleLoginSchema = zod.object({
  name: zod.string().min(2),
  email: zod.string().email(),
  picture: zod.string().optional(),
  googleId: zod.string(),
});

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const validation = loginSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ 
        message: "Invalid input format",
        errors: validation.error.errors 
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { 
        id: user._id, 
        name: user.name, 
        picture: user.picture, 
        email: user.email 
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1d" }
    );

    res.status(200).json({ token, message: "Login successful" });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const validation = registerSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ 
        message: "Invalid input format",
        errors: validation.error.errors 
      });
    }

    const existing = await userModel.findOne({ email });
    if (existing) {
      if (!existing.password) {
        existing.name = name;
        existing.password = await userModel.hashPassword(password);
        await existing.save();
        return res.status(200).json({ message: "Registration successful. Please log in." });
      } else {
        return res.status(400).json({ message: "User already exists" });
      }
    }

    const hashed = await userModel.hashPassword(password);
    await userModel.create({
      name,
      email,
      password: hashed,
    });

    res.status(200).json({ message: "Registration successful. Please log in." });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.googleLogin = async (req, res) => {
  try {
    const { name, email, picture, googleId } = req.body;

    if (!email || !googleId) {
      return res.status(400).json({ message: "Google login requires email and googleId" });
    }

    
    const validation = googleLoginSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ 
        message: "Invalid input format",
        errors: validation.error.errors 
      });
    }

    const existing = await userModel.findOne({ email });
    if (existing) {
      if (!existing.googleId) {

        existing.googleId = googleId;
        existing.picture = picture || existing.picture;
        await existing.save();
      }
      
      const token = jwt.sign(
        {
          id: existing._id,
          name: existing.name,
          picture: existing.picture,
          email: existing.email
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      
      res.status(200).json({
        token,
        message: "Login successful"
      });
    } else {
      const newUser = await userModel.create({ name, email, picture, googleId });
      const token = jwt.sign(
        {
          id: newUser._id,
          name: newUser.name,
          picture: newUser.picture,
          email: newUser.email
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      
      res.status(200).json({
        token,
        message: "Login successful"
      });
    }
  } catch (err) {
    console.error('Google login error:', err);
    res.status(500).json({ message: "Server error" });
  }
};