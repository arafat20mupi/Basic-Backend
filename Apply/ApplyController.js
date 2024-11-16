const User = require('./ApplySchema');  // Import the User model

// Controller to handle the form submission and file upload (as a string)
const createApplyUser = async (req, res) => {
    try {
        const { fullName, email, experience, phone, resume,jobName  } = req.body;

        // Check if the resume is a valid string (URL or base64)
        if (!resume || typeof resume !== 'string') {
            return res.status(400).json({ message: 'Invalid resume format. Please provide a valid string.' });
        }

        // Create a new user document
        const newUser = new User({
            fullName,
            email,
            experience,
            phone,
            resume,
            jobName
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).send({
            message: 'Application submitted successfully!',
            apply: newUser,
        });
    } catch (error) {
        console.error('Error in creating user:', error);
        res.status(500).json({
            message: 'Error in submitting application',
            error: error.message,
        });
    }
};

// Controller to get all users
const getAllUser = async (req, res) => {
    try {
        // Retrieve all user documents from the database
        const users = await User.find();
        res.send(users);
    } catch (error) {
        console.error('Error in retrieving users:', error);
        res.status(500).json({
            message: 'Error in retrieving users',
            error: error.message,
        });
    }
};

module.exports = { createApplyUser, getAllUser };
