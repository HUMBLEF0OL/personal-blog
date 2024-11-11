const express = require('express');
const { getAllArticles, postArticle, getArticle } = require('../controller/articleController');
const routes = express.Router();

routes.get('/all', getAllArticles)

routes.post('/publish', postArticle)

routes.get('/:id', getArticle)

module.exports = routes;