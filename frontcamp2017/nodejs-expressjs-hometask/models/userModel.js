const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt-nodejs');

const UserSchema    = new mongoose.Schema({
    local: {
        email: String,
        password: String
    },

    google: {
        username: String,
        googleId: String
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('UserModel', UserSchema);