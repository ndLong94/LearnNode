'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var InsuranceSchema = new Schema({
  insuranceName: {
    type: String,
    required: true
  },
  providerId: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  active: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: false
  },
  price: {
   origin: {
    type: String,
    required: false
  },
   firstprice: {
    type: String,
    required: false
  },
   secondprice: {
    type: String,
    required: false
  },
   thirdprice: {
    type: String,
    required: false
  },
   isCover: {
    type: String,
    required: false
  },
   isDeductible: {
    type: String,
    required: false
  },
   isDiscount: {
     type: String,
     required: false
   }
  },
  period: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  policy: {
    type: String,
    required: false
  },
  createdAt: {
    type: String,
    required: false
  },
  update: {
    time: {
      type: String,
      required: false
    },
    updateBy: {
      type: String,
      required: false
    },
  }
});

mongoose.model('Insurance', InsuranceSchema);
