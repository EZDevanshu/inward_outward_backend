const mongoose = require("mongoose");

const courierCompanySchema = new mongoose.Schema({
  CourierCompanyName: {
    type: String,
    required: true,
    maxlength: 100,
    trim: true
  },

  ContactPersonName: {
    type: String,
    maxlength: 100,
    trim: true
  },

  DefaultRate: {
    type: mongoose.Schema.Types.Decimal128
  },

  Remarks: {
    type: String,
    maxlength: 500,
    trim: true
  },

  UserID: {
    type: Number,
    required: true
  },

  PhoneNo: {
    type: String,
    maxlength: 50,
    trim: true
  },

  Email: {
    type: String,
    maxlength: 50,
    trim: true
  },

  Website: {
    type: String,
    maxlength: 50,
    trim: true
  },

  Address: {
    type: String,
    maxlength: 500,
    trim: true
  }

}, {
  timestamps: {
    createdAt: "Created",
    updatedAt: "Modified"
  }
});

module.exports = mongoose.model("CourierCompany", courierCompanySchema);
