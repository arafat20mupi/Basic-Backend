const mongoose = require('mongoose');

const ApplySchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
        },
        email: {
            type: String,
        },
        experience: {
            type: String,
        },
        phone: {
            type: Number,
        },
        resume: {
            type: String,
        },
        jobName : {
            type: String,
        },
        status: {
            type: String,
            default: 'Pending',
            enum: ['Pending', 'Accepted', 'Reject']
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("application", ApplySchema); 