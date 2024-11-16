const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.DB_URL) {
            throw new Error('DB_URL is not defined in the environment variables');
        }

        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,   // You can add more options if necessary
            useUnifiedTopology: true
        });

        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);  // Log the error message
        console.error('Stack Trace:', error.stack);  // Log the full stack trace
        
        // Gracefully exit or handle the error based on your environment
        process.exit(1);  // Exiting process for now, can also consider retrying or doing cleanup
    }
};

module.exports = connectDB;

