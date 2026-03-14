const mongoose = require('mongoose');

const inwardFromToSchema = new mongoose.Schema(
  {
    InOutwardFromToID: {
      type: Number,
      required: true,
    },

    InOutwardFromToName: {
      type: String,
      maxlength: 100,
      trim: true,
    },

    IsActive: {
      type: Boolean,
      required: true,
    },

    Sequence: {
      type: Number, // decimal → Number in Mongo
    },

    Remarks: {
      type: String,
      maxlength: 500,
      trim: true,
    },

    UserID: {
      type: Number,
      required: true,
    },

    Created: {
      type: Date,
      required: true,
      default: Date.now,
    },

    Modified: {
      type: Date,
      required: true,
      default: Date.now,
    },

    PersonName: {
      type: String,
      maxlength: 100,
      trim: true,
    },

    Address: {
      type: String,
      maxlength: 250,
      trim: true,
    },

    Place: {
      type: String,
      maxlength: 100,
      trim: true,
    },
  },
  {
    collection: 'InwardFromTo',
    versionKey: false,
  }
);

module.exports = mongoose.model('InwardFromTo', inwardFromToSchema);
