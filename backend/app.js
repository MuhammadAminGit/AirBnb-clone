const express = require('express');
const cors = require('cors');
const listingRoutes = require('./routes/listingRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/listings', listingRoutes);
app.use('/api/bookings', bookingRoutes);

module.exports = app;