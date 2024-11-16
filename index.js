const express = require('express');
const connectDB = require('./Config/dbConfig');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const UserRoute = require('./User/UserRoute');
const ProjectsRoute = require('./Projects/ProjectsRoute');
const ApplyRoute = require('./Apply/ApplyRoute');
require('dotenv').config();

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

// Serve static files (e.g., uploaded files)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/user", UserRoute);
app.use("/projects", ProjectsRoute);
app.use("/apply", ApplyRoute);

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
