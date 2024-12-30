const express = require('express');
const Listing = require('../models/Listing');
const Booking = require('../models/Booking');
const router = express.Router();

// Hardcoded admin login
const adminCredentials = { username: 'admin', password: 'root1234' };

// Middleware to check for admin authentication
const authenticateAdmin = (req, res, next) => {
  const { username, password } = req.body;
  if (username === adminCredentials.username && password === adminCredentials.password) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Get all listings
router.post('/listings/all', authenticateAdmin, async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new listing
router.post('/listings/create', authenticateAdmin, async (req, res) => {
  const listing = new Listing({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    neighborhood_overview: req.body.neighborhood_overview,
    picture_url: req.body.picture_url,
    host_id: req.body.host_id,
    host_url: req.body.host_url,
    host_name: req.body.host_name,
    host_thumbnail_url: req.body.host_thumbnail_url,
    host_picture_url: req.body.host_picture_url,
    property_type: req.body.property_type,
    room_type: req.body.room_type,
    accommodates: req.body.accommodates,
    bathrooms: req.body.bathrooms,
    bathrooms_text: req.body.bathrooms_text,
    bedrooms: req.body.bedrooms,
    beds: req.body.beds,
    amenities: req.body.amenities,
    price: req.body.price,
    number_of_reviews: req.body.number_of_reviews,
    rating: req.body.rating,
  });

  try {
    const newListing = await listing.save();
    res.status(201).json(newListing);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a listing by ID
router.post('/listings/delete/:id', authenticateAdmin, async (req, res) => {
  try {
    const listing = await Listing.findOneAndDelete({ id: req.params.id });
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.json({ message: 'Listing deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Get all bookings (admin view)
router.post('/bookings/all', authenticateAdmin, async (req, res) => {
  try {
    // Fetch all bookings with populated user data
    const bookings = await Booking.find().populate('user', 'name email');
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;
