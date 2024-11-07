const UserSchema = require('../User/UserSchema');

// Register function
const register = async (req, res) => {
    try {
        const { name, email, password, number } = req.body;

        // Check for required fields
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Create a new user instance
        const user = new UserSchema({
            name,
            email,
            password,
            number,
        });

        // Save user to the database
        await user.save();
        console.log('User registered successfully:', user);
        res.status(201).send({ message: 'Successfully created' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Login function
// Login function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).send({ message: 'Email and password are required' });
        }

        // Find the user by email
        const user = await UserSchema.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        // Send success response with the token
        res.send({ message: "Login successful", user: user });
    } catch (error) {
        res.status(500).send({ message: 'Server error' });
    }
};
module.exports = { register, login };