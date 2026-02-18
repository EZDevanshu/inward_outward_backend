const mongoose = require("mongoose");

const outwardSchema = new mongoose.Schema(
  {
    outwardNo: { type: String, required: true, maxlength: 50 },
    outwardDate: { type: Date, required: true },

    inwardId: Number,
    instituteId: Number,
    departmentId: Number,

    outwardByPerson: { type: String, maxlength: 100 },
    inOutwardFromToId: Number,

    letterForwardedToName: { type: String, maxlength: 500 },
    letterForwardedToAddress: { type: String, maxlength: 250 },
    letterForwardedToPlace: { type: String, maxlength: 100 },

    inOutwardModeId: Number,

    letterNo: { type: String, maxlength: 100 },
    letterDate: Date,

    subject: { type: String, maxlength: 250 },

    courierReceiptNo: { type: String, maxlength: 100 },
    courierReceiptDate: Date,

    amount: mongoose.Schema.Types.Decimal128,
    amountPaidType: { type: String, maxlength: 10 },

    courierReceiptPath: { type: String, maxlength: 250 },
    courierAcknowledgePath: { type: String, maxlength: 250 },
    outwardDocumentPath: { type: String, maxlength: 250 },

    remarks: { type: String, maxlength: 500 },

    userId: { type: Number, required: true },

    isReturned: { type: Boolean, default: false },

    returnReason: { type: String, maxlength: 500 },
    returnAction: { type: String, maxlength: 500 },

    noOfCompilation: { type: String, maxlength: 250 },

    courierCompanyId: Number,

    copyTo: { type: String, maxlength: 250 },
    toContactDetails: { type: String, maxlength: 250 },

    returnDate: Date,

    fromInwardOutwardOfficeId: Number,
    toInwardOutwardOfficeId: Number,

    finYearId: Number,

    fileNo: { type: String, maxlength: 50 },

    smsToCsv: { type: String, maxlength: 250 },
    emailToCsv: { type: String, maxlength: 250 },

    subjectShort: { type: String, maxlength: 100 },
    otherInstitute: { type: String, maxlength: 150 },

    charges: mongoose.Schema.Types.Decimal128,

    trackingId: { type: String, maxlength: 50 },
    deliveryStatus: { type: String, maxlength: 50 },
  },
  {
    timestamps: { createdAt: "created", updatedAt: "modified" },
  },
);

module.exports = mongoose.model("Outward" , outwardSchema);