const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['individual', 'company'],
    required: [true, 'Please specify if you are an individual or company']
  },
  name: {
    type: String,
    required: [true, 'Please provide your name']
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number']
  },
  location: {
    type: String,
    required: false
  },
  donationType: {
    type: String,
    enum: ['money', 'goods', 'services'],
    required: [true, 'Please specify the type of donation']
  },
  goodsType: {
    type: String,
    enum: ['food', 'clothing', 'school', 'toiletries'],
    required: function() {
      return this.donationType === 'goods';
    }
  },
  servicesType: {
    type: String,
    enum: ['medical', 'teaching', 'counselling', 'it', 'maintenance'],
    required: function() {
      return this.donationType === 'services';
    }
  },
  paymentMethod: {
    type: String,
    enum: ['mpesa', 'bank', 'paypal'],
    required: function() {
      return this.donationType === 'money';
    }
  },
  purpose: {
    type: String,
    required: [true, 'Please provide the purpose of your donation']
  },
  preferences: {
    type: String,
    enum: ['receipt', 'updates', 'anonymous', 'future'],
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation; 