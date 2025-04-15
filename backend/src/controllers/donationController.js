const Donation = require('../models/Donation');
const { AppError } = require('../middleware/errorHandler');

exports.createDonation = async (req, res, next) => {
  try {
    console.log('Received donation data:', req.body);
    
    // Validate required fields
    if (!req.body.type || !req.body.name || !req.body.phone || !req.body.donationType) {
      return res.status(400).json({
        status: 'error',
        message: 'Missing required fields. Please check: type, name, phone, and donation type.'
      });
    }

    // Clean up the request body
    const donationData = {
      type: req.body.type,
      name: req.body.name.trim(),
      phone: req.body.phone.trim(),
      location: (req.body.location || '').trim(),
      donationType: req.body.donationType,
      purpose: (req.body.purpose || '').trim(),
      date: req.body.date
    };

    // Only add type-specific fields if they have values
    if (req.body.donationType === 'goods' && req.body.goodsType) {
      donationData.goodsType = req.body.goodsType;
    }
    if (req.body.donationType === 'services' && req.body.servicesType) {
      donationData.servicesType = req.body.servicesType;
    }
    if (req.body.donationType === 'money' && req.body.paymentMethod) {
      donationData.paymentMethod = req.body.paymentMethod;
    }

    // Add preferences if present
    if (req.body.preferences) {
      donationData.preferences = req.body.preferences;
    }

    // Validate phone number format
    if (!/^7\d{8}$/.test(donationData.phone)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid phone number format. Must start with 7 and be 9 digits long.'
      });
    }

    // Validate donation type specific fields
    if (donationData.donationType === 'goods' && !donationData.goodsType) {
      return res.status(400).json({
        status: 'error',
        message: 'Goods type is required when donation type is goods'
      });
    }

    if (donationData.donationType === 'services' && !donationData.servicesType) {
      return res.status(400).json({
        status: 'error',
        message: 'Service type is required when donation type is services'
      });
    }

    if (donationData.donationType === 'money' && !donationData.paymentMethod) {
      return res.status(400).json({
        status: 'error',
        message: 'Payment method is required when donation type is money'
      });
    }

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
    
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        status: 'error',
        message: Object.values(error.errors).map(err => err.message).join(', ')
      });
    }

    res.status(500).json({
      status: 'error',
      message: 'Error creating donation'
    });
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
    res.status(500).json({
      status: 'error',
      message: 'Error fetching donations'
    });
  }
}; 