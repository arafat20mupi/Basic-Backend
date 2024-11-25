const express = require('express');
const connectDB = require('./Config/dbConfig');
const cors = require('cors');
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


// Routes
app.use("/user", UserRoute);
app.use("/projects", ProjectsRoute);
app.use("/apply", ApplyRoute);

app.get('/', (req, res) => {
    res.send('Welcome to CodeCraftor');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
