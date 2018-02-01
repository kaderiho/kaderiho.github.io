const mongoose = require('mongoose');
const ArticlesSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String
});
const ArticlesModel = mongoose.model('ArticlesModel', ArticlesSchema);

module.exports = ArticlesModel;


