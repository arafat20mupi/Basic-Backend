require('dotenv').config();
const express = require('express');
const connectDB = require('./Config/dbConfig');
const cors = require('cors');
const UserRoute = require('./User/UserRoute');
const ProjectsRoute = require('./Projects/ProjectsRoute');
const ApplyRoute = require('./Apply/ApplyRoute');
const cloudinary = require('cloudinary').v2;
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors(
    {
        origin: ['http://localhost:5173', 'http://localhost:5174'],
        credentials: true,
    }

));

// Connect to Database
connectDB();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Routes
app.use("/api", UserRoute);
app.use("/projects", ProjectsRoute);
app.use("/apply", ApplyRoute);

app.get('/', (req, res) => {
    res.send('Welcome to CodeCraftor');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
