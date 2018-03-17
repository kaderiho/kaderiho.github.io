const mongoose = require('mongoose');
const ArticlesSchema = new mongoose.Schema({
    id: Number,
    author: String,
    message: String
});
const ArticlesModel = mongoose.model('ArticlesModel', ArticlesSchema);

module.exports = ArticlesModel;


