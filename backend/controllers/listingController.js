// const listings = require('../data/listings');
const Listing = require('../models/Listing');

// Get all listings
// const getAllListings = (req, res) => {
//   res.json(listings);
// };

// // Get a single listing by ID
// const getListingById = (req, res) => {
//   const listing = listings.find((l) => l.id === parseInt(req.params.id));
//   if (listing) {
//     res.json(listing);
//   } else {
//     res.status(404).json({ message: 'Listing not found' });
//   }
// };

const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const mongoose = require("mongoose");

const getListingById = async (req, res) => {
  try {
    const { id } = req.params;

    // Query the database for the listing with the given ID
    const listing = await Listing.findOne({ id: id }); // Replace `customId` with your schema field name

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    res.json(listing);
  } catch (error) {
    console.error("Error fetching listing:", error);
    res.status(500).json({ message: "Internal server error" });
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
