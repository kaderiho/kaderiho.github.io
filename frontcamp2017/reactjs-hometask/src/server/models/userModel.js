const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
});

UserSchema.methods.comparePassword = function comparePasswords(password, callback) {
    bcrypt.compare(password, this.password, callback)
};

UserSchema.pre('save', function saveHook(next) {
    const user = this;

    // proceed further only if the password is modified or the user is new
    if (!user.isModified('password')) return next();

    return bcrypt.genSalt((saltError, salt) => {
        if (saltError) { return next(saltError); }

        return bcrypt.hash(user.password, salt, (hashError, hash) => {
            if (hashError) { return next(hashError); }

            // replace a password string with hash value
            user.password = hash;

            return next();
        });
    });
});

// Method for generating password hash
// UserSchema.methods.generateHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// Checking if password is valid
// UserSchema.methods.validPassword = function (password) {
//     console.log(`Password validation! ${password}`);
//     console.log(this);
//     return bcrypt.compareSync(password, this.local.password);
// };

module.exports = mongoose.model('UserModel', UserSchema);