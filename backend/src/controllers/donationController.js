const Donation = require('../models/Donation');
const { AppError } = require('../middleware/errorHandler');

exports.createDonation = async (req, res, next) => {
  try {
    console.log('Received donation data:', req.body);
    
    // Add user ID to the donation
    const donationData = {
      ...req.body,
      user: req.user._id
    };

    const donation = await Donation.create(donationData);
    
    console.log('Created donation:', donation);
    
    res.status(201).json({
      status: 'success',
      data: {
        donation
      }
    });
  } catch (error) {
    console.error('Error creating donation:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        status: 'error',
        message: 'Validation Error',
        errors: Object.values(error.errors).map(err => err.message)
      });
    }
    next(error);
  }
};

exports.getAllDonations = async (req, res, next) => {
  try {
    const donations = await Donation.find().sort('-date');
    
    res.status(200).json({
      status: 'success',
      results: donations.length,
      data: {
        donations
      }
    });
  } catch (error) {
    console.error('Error fetching donations:', error);
    next(error);
  }
}; 