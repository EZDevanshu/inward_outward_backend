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
    inOutwardFromToID: {
      type: Number,
      required: true
    },

    inOutwardFromToName: {
      type: String,
      maxlength: 100
    },

    isActive: {
      type: Boolean,
      required: true
    },

    sequence: {
      type: Number
    },

    remarks: {
      type: String,
      maxlength: 500
    },

    userID: {
      type: Number,
      required: true
    },

    created: {
      type: Date,
      required: true,
      default: Date.now
    },

    modified: {
      type: Date,
      required: true,
      default: Date.now
    },

    personName: {
      type: String,
      maxlength: 100
    },

    address: {
      type: String,
      maxlength: 250
    },

    place: {
      type: String,
      maxlength: 100
    }
  },
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'modified',
    },
  } ,
   {
    collection: 'InwardOutwardOffice'
  } , 
  {
  timestamps: { createdAt: 'created', updatedAt: 'modified' }
}
);

module.exports = mongoose.model(
  'InwardOutwardOffice',
  inwardOutwardOfficeSchema
);
