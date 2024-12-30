// controllers/bookingController.js

const Booking = require('../models/Booking');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { listing, checkIn, checkOut, guests, total } = req.body;
    const userId = req.user.id; // Assuming `req.user` is set via auth middleware

    const booking = await Booking.create({
      listing,
      checkIn,
      checkOut,
      guests,
      total,
      user: userId,
    });

    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user', 'name email');
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a booking by ID
exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    await Booking.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Booking deleted' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
