const clientModel = require("../models/client");
const z = require("zod");
const mongoose = require("mongoose");

const clientSchema = z.object({
  name: z.string().min(2),
  companyName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().length(10),
  billingAddress: z.string().min(10),
  shippingAddress: z.string().min(10),
  taxId: z.string().min(1),
  notes: z.string().min(5).max(100),
  status: z.string(),
});

const addclient = async (req, res) => {
  try {
    const {
      name,
      companyName,
      email,
      phone,
      billingAddress,
      shippingAddress,
      taxId,
      notes,
      status,
    } = req.body;

    const validation = clientSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({
        message: "Invalid client data",
        errors: validation.error.errors,
      });
    }

    const client = new clientModel({
      name,
      companyName,
      email,
      phone,
      billingAddress,
      shippingAddress,
      taxId,
      notes,
      status,
      userId: req.user.id,
    });

    await client.save();
    res.status(200).json({ message: "Client added successfully", client });
  } catch (err) {
    console.error("Add client error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
const getClients = async (req, res) => {
  try {
    const clients = await clientModel.find({ userId: req.user.id });
    res.status(200).json({ clients });
  } catch (err) {
    console.error("Get clients error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
const getSelectedClient = async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const client = await clientModel.findOne({ 
      _id: id, 
      userId: req.user.id 
    });
    
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    
    res.status(200).json({ client });
  } catch (err) {
    console.error("Get client error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addclient,
  getClients,
  getSelectedClient,
};
