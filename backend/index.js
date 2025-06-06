require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors'); // <-- Import cors

const app = express();

// Connect Database
connectDB();

// Middleware to allow all origins
app.use(cors()); // <-- Enable CORS for all origins

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
