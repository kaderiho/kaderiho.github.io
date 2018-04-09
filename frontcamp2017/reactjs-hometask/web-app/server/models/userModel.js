const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');

const UserSchema = new mongoose.Schema({
    local: {
        email: String,
        password: String
    },

    google: {
        username: String,
        googleId: String
    }
});

UserSchema.methods.comparePassword = function comparePasswords(password, callback) {
    bcrypt.compare(password, this.local.password, callback)
};

UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

module.exports = mongoose.model('UserModel', UserSchema);