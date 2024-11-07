const express = require('express')
const { register, login } = require('./UserController')

const app = express.Router()

app.post('/register', register)

app.post('/login', login)

module.exports = app