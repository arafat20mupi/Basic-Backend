const express = require('express');
const { allUsers, updateRole, deleteUser } = require('./UserController');

const app = express.Router();


app.get('/users',allUsers)
app.patch('/update-role',updateRole)
app.delete('/delete/user/:uid',deleteUser)

module.exports = app;