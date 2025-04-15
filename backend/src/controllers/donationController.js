const Donation = require('../models/Donation');
const { AppError } = require('../middleware/errorHandler');

exports.createDonation = async (req, res, next) => {
  try {
    const donation = await Donation.create(req.body);
    
    res.status(201).json({
      status: 'success',
      data: {
        donation
      }
    });
  } catch (error) {
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
    next(error);
  }
}; 