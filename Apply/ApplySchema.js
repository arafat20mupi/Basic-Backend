const mongoose = require('mongoose');

const ApplySchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        experience: {
            type: String,
        },
        phone: {
            type: Number,
        },
        file: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("apply", ApplySchema); // Corrected model export
