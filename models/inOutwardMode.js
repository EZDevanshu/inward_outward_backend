const mongoose = require("mongoose");

const inOutwardModeSchema = new mongoose.Schema(
  {
    inOutwardModeName: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },

    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },

    sequence: {
      type: Number, // decimal → Number in Mongo
    },

    remarks: {
      type: String,
      maxlength: 500,
      trim: true,
    },

    userID: {
      type: Number,
      required: true,
    },

    created: {
      type: Date,
      required: true,
      default: Date.now,
    },

    modified: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    collection: "InOutwardMode",
    versionKey: false,
  },
);

export default mongoose.model('InOutwardMode' , inOutwardModeSchema)