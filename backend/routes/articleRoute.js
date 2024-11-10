const express = require('express');
const { getAllArticles, postArticle } = require('../controller/articleController');
const routes = express.Router();

routes.get('/all', getAllArticles)

routes.post('/publish', postArticle)

module.exports = routes;