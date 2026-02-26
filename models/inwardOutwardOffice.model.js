const mongoose = require('mongoose');

const InwardOutwardOfficeSchema = new mongoose.Schema(
{
  InwardOutwardOfficeID: {
    type: Number,
    required: true
  },

  OfficeName: {
    type: String,
    required: true,
    maxlength: 250,
    trim: true
  },

  InstituteID: {
    type: Number,
    required: true
  },

  DepartmentID: {
    type: Number,
    default: null
  },

  OpeningDate: {
    type: Date,
    required: true
  },

  OpeningInwardNo: {
    type: Number,
    required: true
  },

  OpeningOutwardNo: {
    type: Number,
    required: true
  },

  Remarks: {
    type: String,
    maxlength: 500,
    default: null
  },

  UserID: {
    type: Number,
    required: true
  },

  Created: {
    type: Date,
    required: true,
    default: Date.now
  },

  Modified: {
    type: Date,
    required: true,
    default: Date.now
  },

  InOutwardFromToID: {
    type: Number,
    required: true
  },

  InOutwardFromToName: {
    type: String,
    maxlength: 100,
    default: null
  },

  IsActive: {
    type: Boolean,
    required: true
  },

  Sequence: {
    type: Number,
    default: null
  },

  PersonName: {
    type: String,
    maxlength: 100,
    default: null
  },

  Address: {
    type: String,
    maxlength: 250,
    default: null
  },

  Place: {
    type: String,
    maxlength: 100,
    default: null
  }
}
);
module.exports = mongoose.model('InwardOutwardOffice', InwardOutwardOfficeSchema);