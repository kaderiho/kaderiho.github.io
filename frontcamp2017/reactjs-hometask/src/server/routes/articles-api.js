const { deleteArticle, updateArticle, createArticle, getArticle, getArticles } = require('../controllers/articleController');
const express   = require('express');
const router    = express.Router();

// CRUD Article requests
router.delete('/', deleteArticle);
router.put('/:id', updateArticle);
router.post('/', createArticle);
router.get('/:id', getArticle);
router.get('/', getArticles);

module.exports = router;