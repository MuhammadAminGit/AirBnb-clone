const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');
const {
  getUserProfile,
  getUserBookings,
  deleteBooking,
} = require('../controllers/userController');

// Middleware to protect routes
router.use(authenticateToken);

// User profile
router.get('/profile', getUserProfile);

// User bookings
router.get('/bookings', getUserBookings);

// Delete specific booking
router.delete('/bookings/:id', deleteBooking);

module.exports = router;
