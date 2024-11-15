// Create a new booking
const createBooking = (req, res) => {
    const booking = req.body;
    res.status(201).json({ message: 'Booking created successfully', booking });
  };
  
  module.exports = {
    createBooking,
  };
  