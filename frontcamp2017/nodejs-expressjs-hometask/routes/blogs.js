var articleController   = require('../controllers/articleController.js');
var express             = require('express');
var router              = express.Router();

// CRUD Article requests
router.delete('/:id', articleController.deleteArticle);
router.put('/:id', articleController.updateArticle);
router.post('/', articleController.createArticle);
router.get('/:id', articleController.getArticle);
router.get('/', articleController.getArticles);

module.exports = router;