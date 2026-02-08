const mongoose = require('mongoose');

const inwardSchema = new mongoose.Schema(
  {
    inwardID: {
      type: Number,
      required: true
    },

    inwardNo: {
      type: String,
      required: true,
      maxlength: 50
    },

    inwardDate: {
      type: Date,
      required: true
    },

    receivedDate: {
      type: Date
    },

    outwardID: {
      type: Number
    },

    inOutwardModelID: {
      type: Number
    },

    receiptNo: {
      type: String,
      maxlength: 100
    },

    receiptDate: {
      type: Date
    },

    inwardLetterNo: {
      type: String,
      maxlength: 100
    },

    inwardLetterDate: {
      type: Date
    },

    subject: {
      type: String
    },

    description: {
      type: String,
      maxlength: 500
    },

    inOutwardFromToID: {
      type: Number
    },

    letterFromName: {
      type: String,
      maxlength: 100
    },

    letterFromAddress: {
      type: String,
      maxlength: 500
    },

    instituteID: {
      type: Number
    },

    departmentID: {
      type: Number
    },

    toPersonName: {
      type: String,
      maxlength: 100
    },

    inwardDocumentPath: {
      type: String,
      maxlength: 250
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

    courierCompanyName: {
      type: String,
      maxlength: 100
    },

    noOfCompilation: {
      type: String,
      maxlength: 250
    },

    copyTo: {
      type: String,
      maxlength: 250
    },

    fromContactDetails: {
      type: String,
      maxlength: 250
    },

    fromInwardOutwardOfficeID: {
      type: Number
    },

    toInwardOutwardOfficeID: {
      type: Number,
      required: true
    },

    internalOutwardID: {
      type: Number
    },

    finYearID: {
      type: Number,
      required: true
    },

    subjectShort: {
      type: String,
      maxlength: 100
    },

    otherInstitute: {
      type: String,
      maxlength: 150
    }
  },
  {
    collection: 'Inward'
  }
);

module.exports = mongoose.model(
    'Inward',
    inwardSchema
);
