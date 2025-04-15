const express = require('express');
const donationController = require('../controllers/donationController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create donation (protected route)
router.post('/', authMiddleware.protect, donationController.createDonation);

// Get all donations (admin only)
router.get('/', authMiddleware.protect, authMiddleware.restrictTo('admin'), donationController.getAllDonations);

module.exports = router; 