const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Basic middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB ansluten');
  } catch (error) {
    console.error('MongoDB fel:', error);
  }
};

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Made in Malmö API' });
});

// Start server
connectDB();
app.listen(PORT, () => {
  console.log(`Server på port ${PORT}`);
}); 