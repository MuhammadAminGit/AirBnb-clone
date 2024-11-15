const express = require('express');
const router = express.Router();
const {
  getAllListings,
  getListingById,
  searchListings,
} = require('../controllers/listingController');

router.get('/', getAllListings);
router.get('/:id', getListingById);
router.get('/search', searchListings);

module.exports = router;
