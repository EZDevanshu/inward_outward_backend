const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    UserID: {
        type: Number,
        required: true
    },

    PhoneNo: String,

    Email: {
        type: String,
        required: true
    },

    Password: {
        type: String,
        required: true
    },

    Role: {
        type: String,
        enum: ["admin", "operator"],
        required: true
    }

});

module.exports = mongoose.model("User", userSchema);