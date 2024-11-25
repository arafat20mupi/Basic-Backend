const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name : {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,

        },
        number: {
            type: Number ,
        },
        role : {
            type: String,
            enum: ['admin', 'user'],
            default: 'user'
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("users" , UserSchema)