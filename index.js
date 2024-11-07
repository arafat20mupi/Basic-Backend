const express = require('express');
const connectDB = require('./Config/dbConfig');
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const UserRoute = require('./User/UserRoute');

const app = express();

app.use(express.json());


connectDB()

app.use("/user" , UserRoute)

app.get('/', (req, res) => {
    res.send('Welcome Server side');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
