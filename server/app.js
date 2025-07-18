const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const connectDB = require('./config/connection');
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoutes = require('./routes/authRoutes');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/v1/auth', authRoutes);

app.listen(port, () => {
});