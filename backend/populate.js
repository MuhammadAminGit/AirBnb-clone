const mongoose = require("mongoose");
const Listing = require("./models/Listing");
const listings = require("./data/listings"); // Import listings.js file
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const populate = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    // Filter out listings missing required fields
    const validListings = listings.filter((listing) =>
      listing.bathrooms !== undefined &&
      listing.bedrooms !== undefined &&
      listing.beds !== undefined &&
      listing.beds !==  null &&
      listing.price
    );

    if (validListings.length === 0) {
      console.log("No valid listings to insert.");
      process.exit();
    }

    await Listing.insertMany(validListings);
    console.log(`Successfully inserted ${validListings.length} listings`);
    process.exit();
  } catch (error) {
    console.error("Error populating listings:", error);
    process.exit(1);
  }
};

populate();
