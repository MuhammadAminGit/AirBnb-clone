const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  neighborhood_overview: {
    type: String,
  },
  picture_url: {
    type: String,
    required: true,
  },
  host_id: {
    type: Number,
    required: true,
  },
  host_url: {
    type: String,
  },
  host_name: {
    type: String,
    required: true,
  },
  host_thumbnail_url: {
    type: String,
  },
  host_picture_url: {
    type: String,
  },
  property_type: {
    type: String,
    required: true,
  },
  room_type: {
    type: String,
    required: true,
  },
  accommodates: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  bathrooms_text: {
    type: String,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
    default: 1,
  },
  amenities: {
    type: [String],
    default: [],
  },
  price: {
    type: String,
    required: true,
  },
  number_of_reviews: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Listing', ListingSchema);
