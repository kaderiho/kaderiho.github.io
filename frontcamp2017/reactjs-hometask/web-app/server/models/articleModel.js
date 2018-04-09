const mongoose = require('mongoose');
const ArticlesSchema = new mongoose.Schema({
    message: String,
    author: String,
    date: String,
    id: String
});
const ArticlesModel = mongoose.model('ArticlesModel', ArticlesSchema);

module.exports = ArticlesModel;


