const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt-nodejs');

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

// Method for generating password hash
UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Checking if password is valid
UserSchema.methods.validPassword = function (password) {
    console.log(`Password validation! ${password}`);
    console.log(this);
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('UserModel', UserSchema);