const mongoose      = require('mongoose');
const UserSchema    = new mongoose.Schema({
    username: String,
    googleId: String
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;