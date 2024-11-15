const listings = require('../data/listings');

// Get all listings
const getAllListings = (req, res) => {
  res.json(listings);
};

// Get a single listing by ID
const getListingById = (req, res) => {
  const listing = listings.find((l) => l.id === parseInt(req.params.id));
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).json({ message: 'Listing not found' });
  }
};

// Search listings by query
const searchListings = (req, res) => {
  const query = req.query.query?.toLowerCase();
  const results = listings.filter((listing) =>
    listing.title.toLowerCase().includes(query)
  );
  res.json(results);
};

module.exports = {
  getAllListings,
  getListingById,
  searchListings,
};
