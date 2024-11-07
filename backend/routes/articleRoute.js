const express = require('express');
const { getAllArticles } = require('../controller/articleController');
const routes = express.Router();

routes.get('/all', getAllArticles)

module.exports = routes;