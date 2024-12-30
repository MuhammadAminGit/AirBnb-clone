// routes/bookingRoutes.js

const express = require('express');
const router = express.Router();
const {
  createBooking,
  getAllBookings,
  deleteBooking,
} = require('../controllers/bookingController');
const authenticateToken = require('../middleware/auth'); // Import your middleware

// Create a new booking (protected)
router.post('/', authenticateToken, createBooking);

// Get all bookings (protected)
router.get('/', authenticateToken, getAllBookings);

// Delete a booking by ID (protected)
router.delete('/:id', authenticateToken, deleteBooking);

module.exports = router;
