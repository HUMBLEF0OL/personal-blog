const express = require('express');
const { login, signup } = require('../controller/authController');
const routes = express.Router();

routes.post('/login', login)

routes.post('/signup', signup)

module.exports = routes