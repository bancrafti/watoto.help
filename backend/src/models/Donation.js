const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, 'Please specify if you are an individual or company'],
    enum: ['individual', 'company']
  },
  name: {
    type: String,
    required: [true, 'Please provide your name']
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
    match: [/^7\d{8}$/, 'Please provide a valid phone number starting with 7']
  },
  location: {
    type: String,
    required: [true, 'Please provide your location']
  },
  donationType: {
    type: String,
    required: [true, 'Please select a donation type'],
    enum: ['money', 'goods', 'services']
  },
  goodsType: {
    type: String,
    enum: ['food', 'clothing', 'school', 'toiletries'],
    validate: {
      validator: function(v) {
        return this.donationType !== 'goods' || (this.donationType === 'goods' && v);
      },
      message: 'Goods type is required when donation type is goods'
    }
  },
  servicesType: {
    type: String,
    enum: ['medical', 'teaching', 'counselling', 'it', 'maintenance'],
    validate: {
      validator: function(v) {
        return this.donationType !== 'services' || (this.donationType === 'services' && v);
      },
      message: 'Services type is required when donation type is services'
    }
  },
  paymentMethod: {
    type: String,
    enum: ['mpesa', 'bank', 'paypal'],
    validate: {
      validator: function(v) {
        return this.donationType !== 'money' || (this.donationType === 'money' && v);
      },
      message: 'Payment method is required when donation type is money'
    }
  },
  purpose: {
    type: String,
    required: [true, 'Please provide the purpose of your donation']
  },
  preferences: {
    type: String,
    enum: ['receipt', 'updates', 'anonymous', 'future']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Donation', donationSchema); 