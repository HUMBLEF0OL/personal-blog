const express = require('express');
const { getAllArticles, postArticle, getArticle, deleteArticle, editArticle } = require('../controller/articleController');
const routes = express.Router();

routes.get('/all', getAllArticles)

routes.post('/publish', postArticle)

routes.delete('/:id', deleteArticle)

routes.put('/:id', editArticle)

routes.get('/:id', getArticle)

module.exports = routes;