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
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("DataBase" , UserSchema)