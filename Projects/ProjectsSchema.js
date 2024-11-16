const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema(
    {
        title : {
            type: String,
        },
        description: {
            type: String,
        },
        image :{
            type: String,
        },
        liveLink : {
            type: String,
        },
        category: {
            type: String,
        }  
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Projects" , ProjectsSchema)