const User = require('./ApplySchema');  // Import the User model

// Controller to handle the form submission and file upload
const createApplyUser = async (req, res) => {
    try {
        const { fullName, email, experience, phone } = req.body;
        const file = req.file ? req.file.path : null; // File path (if a file is uploaded)

        // Create new user document
        const newUser = new User({
            fullName,
            email,
            experience,
            phone,
            file,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({
            message: 'Application submitted successfully!',
            user: newUser,
        });
    } catch (error) {
        console.error('Error in creating user:', error);
        res.status(500).json({
            message: 'Error in submitting application',
            error: error.message,
        });
    }
};

const getAllUser =async (req, res) => {
    try {
        // Retrieve all user documents from the database
        const users = await User.find();
        res.send(users);
    }
    catch (error) {
        console.error('Error in retrieving users:', error);
        res.status(500).json({
            message: 'Error in retrieving users',
            error: error.message,
        });
    }
}


module.exports = { createApplyUser, getAllUser }; 
