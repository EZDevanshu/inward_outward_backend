const mongoose = require('mongoose');

const inwardOutwardOfficeSchema = new mongoose.Schema(
  {
    officeName: {
      type: String,
      required: true,
      maxlength: 250,
      trim: true,
    },

    instituteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Institute',
      required: true,
    },

    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
      default: null,
    },

    openingDate: {
      type: Date,
      required: true,
    },

    openingInwardNo: {
      type: Number,
      required: true,
    },

    openingOutwardNo: {
      type: Number,
      required: true,
    },

    remarks: {
      type: String,
      maxlength: 500,
      default: null,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'modified',
    },
  }
);

module.exports = mongoose.model(
  'InwardOutwardOffice',
  inwardOutwardOfficeSchema
);
