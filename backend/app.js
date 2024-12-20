const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const listingRoutes = require('./routes/listingRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
    }
).catch(err => {
    console.log(err);
});

// Routes
app.use('/api/listings', listingRoutes);
app.use('/api/bookings', bookingRoutes);

module.exports = app;
