const User = require('../models/User');
const Booking = require('../models/Booking');

// Get User Profile
exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Extracted from JWT middleware

    const user = await User.findById(userId).select('name email createdAt');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get User Bookings
exports.getUserBookings = async (req, res) => {
  try {
    const userId = req.user.id; // Extracted from JWT middleware

    const bookings = await Booking.find({ user: userId }).select(
      'listing checkIn checkOut guests total'
    );

    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a User's Booking by ID
exports.deleteBooking = async (req, res) => {
  try {
    const userId = req.user.id; // Extracted from JWT middleware
    const { id } = req.params;

    const booking = await Booking.findOne({ _id: id, user: userId });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found or unauthorized',
      });
    }

    await Booking.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: 'Booking deleted' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
