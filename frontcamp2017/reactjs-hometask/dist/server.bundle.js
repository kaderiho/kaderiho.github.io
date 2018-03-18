/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DELETE_FLASH_MESSAGE = exports.DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE';
var ADD_FLASH_MESSAGE = exports.ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
var SET_CURRENT_USER = exports.SET_CURRENT_USER = 'SET_CURRENT_USER';
var REMOVE_ARTICLE = exports.REMOVE_ARTICLE = 'REMOVE_ARTICLE';
var ADD_ARTICLE = exports.ADD_ARTICLE = 'ADD_ARTICLE';

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextFieldGroup = function TextFieldGroup(_ref) {
    var field = _ref.field,
        value = _ref.value,
        label = _ref.label,
        error = _ref.error,
        type = _ref.type,
        onChange = _ref.onChange;

    return _react2.default.createElement(
        "div",
        { className: "form-group" },
        _react2.default.createElement(
            "label",
            { className: "control-label" },
            label
        ),
        _react2.default.createElement("input", { className: "form-control",
            onChange: onChange,
            value: value,
            name: field,
            type: type }),
        error && _react2.default.createElement(
            "span",
            { className: "help-block" },
            error
        )
    );
};

TextFieldGroup.defaultProps = {
    type: 'text'
};

exports.default = TextFieldGroup;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validator = __webpack_require__(48);

var _validator2 = _interopRequireDefault(_validator);

var _isEmpty = __webpack_require__(17);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateInput = function validateInput(data) {
    var errors = {};

    if (!_validator2.default.isEmail(data.email)) {
        errors.email = 'Its should be an email';
    }

    if (_validator2.default.isEmpty(data.password)) {
        errors.password = 'The password is required';
    }

    return {
        errors: errors,
        isValid: (0, _isEmpty2.default)(errors)
    };
};

exports.default = validateInput;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    dbURI: "mongodb://kostya.aderiho:aderiho280993@ds121118.mlab.com:21118/frontcamp",
    jwtSecret: 'somesecretjwttokenstring'
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(15);

var _reactRedux = __webpack_require__(1);

var _index = __webpack_require__(27);

var _index2 = _interopRequireDefault(_index);

var _indexTemplate = __webpack_require__(33);

var _indexTemplate2 = _interopRequireDefault(_indexTemplate);

var _server = __webpack_require__(35);

var _server2 = _interopRequireDefault(_server);

var _reactRouterDom = __webpack_require__(3);

var _app = __webpack_require__(36);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Create store on server-side


var renderedApp = function renderedApp(req, statePropName, statePropValue) {
    var store = (0, _redux.createStore)(_index2.default, _defineProperty({}, statePropName, statePropValue));
    var context = {};

    var markup = _server2.default.renderToString(
    // context - is an object for passing data to the certain component
    _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.url, context: context },
        _react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(_app2.default, null)
        )
    ));

    var preLoadedState = store.getState();

    return (0, _indexTemplate2.default)(markup, preLoadedState);
};

exports.default = renderedApp;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logout = exports.login = exports.setCurrentUser = undefined;

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _setAuthorizationToken = __webpack_require__(38);

var _setAuthorizationToken2 = _interopRequireDefault(_setAuthorizationToken);

var _types = __webpack_require__(6);

var _jwtDecode = __webpack_require__(57);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setCurrentUser = exports.setCurrentUser = function setCurrentUser(user) {
    return {
        type: _types.SET_CURRENT_USER,
        user: user
    };
};

var login = exports.login = function login(userData) {
    return function (dispatch) {
        return _axios2.default.post('/auth/login', userData).then(function (res) {
            var token = res.data.token;

            localStorage.setItem('jwtToken', token);
            (0, _setAuthorizationToken2.default)(token);

            dispatch(setCurrentUser((0, _jwtDecode2.default)(token)));
        });
    };
};

var logout = exports.logout = function logout() {
    return function (dispatch) {
        localStorage.removeItem('jwtToken');
        (0, _setAuthorizationToken2.default)(false);
        dispatch(setCurrentUser({}));
    };
};

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteFlashMessage = exports.addFlashMessage = undefined;

var _types = __webpack_require__(6);

var addFlashMessage = exports.addFlashMessage = function addFlashMessage(message) {
    return {
        type: _types.ADD_FLASH_MESSAGE,
        message: message
    };
};

var deleteFlashMessage = exports.deleteFlashMessage = function deleteFlashMessage(message) {
    return {
        type: _types.DELETE_FLASH_MESSAGE,
        message: message
    };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _db = __webpack_require__(10);

var _db2 = _interopRequireDefault(_db);

var _passport = __webpack_require__(11);

var _passport2 = _interopRequireDefault(_passport);

var _mongoose = __webpack_require__(4);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _localSignup = __webpack_require__(22);

var _localSignup2 = _interopRequireDefault(_localSignup);

var _localLogin = __webpack_require__(25);

var _localLogin2 = _interopRequireDefault(_localLogin);

var _authCheck = __webpack_require__(26);

var _authCheck2 = _interopRequireDefault(_authCheck);

var _renderedApp = __webpack_require__(13);

var _renderedApp2 = _interopRequireDefault(_renderedApp);

var _articlesApi = __webpack_require__(61);

var _articlesApi2 = _interopRequireDefault(_articlesApi);

var _articles = __webpack_require__(54);

var _articles2 = _interopRequireDefault(_articles);

var _signup = __webpack_require__(55);

var _signup2 = _interopRequireDefault(_signup);

var _auth = __webpack_require__(56);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

_mongoose2.default.connect(_db2.default.dbURI, function () {
    console.dir('Connected to MongoDB');
}, function (err) {
    console.dir(err);
});

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));
app.use(_express2.default.static('dist'));
app.use(_passport2.default.initialize());

// Load passport strategies
_passport2.default.use('local-signup', _localSignup2.default);
_passport2.default.use('local-login', _localLogin2.default);

// ARTICLES pages
app.use('/articles/api', _authCheck2.default, _articlesApi2.default);
app.use('/articles', _articles2.default); // TODO: need to predefine state state

// AUTHORIZATION / SIGN UP pages
app.use('/signup', _signup2.default);
app.use('/auth', _auth2.default);

// Base
app.use('/', function (req, res) {
    return res.send((0, _renderedApp2.default)(req));
});

app.listen(3000, function () {
    console.log('Server is running on: 3000 port');
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PassportLocalStrategy = __webpack_require__(14).Strategy;
var User = __webpack_require__(23);

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, function (req, email, password, done) {
    var newUser = new User();

    newUser.email = email.trim();
    newUser.password = password.trim();

    newUser.save(function (err) {
        if (err) {
            return done(err);
        }

        return done(null);
    });
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(4);
var bcrypt = __webpack_require__(24);

var UserSchema = new mongoose.Schema({
    email: String,
    password: String
});

UserSchema.methods.comparePassword = function comparePasswords(password, callback) {
    bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function saveHook(next) {
    var user = this;

    // proceed further only if the password is modified or the user is new
    if (!user.isModified('password')) return next();

    return bcrypt.genSalt(function (saltError, salt) {
        if (saltError) {
            return next(saltError);
        }

        return bcrypt.hash(user.password, salt, function (hashError, hash) {
            if (hashError) {
                return next(hashError);
            }

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
//     console.log(`Password validations! ${password}`);
//     console.log(this);
//     return bcrypt.compareSync(password, this.local.password);
// };

module.exports = mongoose.model('UserModel', UserSchema);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PassportLocalStrategy = __webpack_require__(14).Strategy;
var User = __webpack_require__(4).model('UserModel');
var config = __webpack_require__(10);
var jwt = __webpack_require__(12);

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, function (req, email, password, done) {
    return User.findOne({ email: email }, function (err, user) {
        if (err) {
            return done(err);
        }

        if (!user) {
            var error = new Error('Incorrect email or password');
            error.name = 'IncorrectCredentialsError';

            return done(error);
        }

        return user.comparePassword(password, function (passwordErr, isMatch) {
            if (err) {
                return done(err);
            }

            if (!isMatch) {
                var _error = new Error('Incorrect email or password');
                _error.name = 'IncorrectCredentialsError';

                return done(_error);
            }

            var payload = {
                sub: user._id,
                email: email
            };

            var token = jwt.sign(payload, config.jwtSecret);
            var data = {
                email: user.email
            };

            return done(null, token, data);
        });
    });
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var User = __webpack_require__(4).model('UserModel');
var config = __webpack_require__(10);
var jwt = __webpack_require__(12);

module.exports = function (req, res, next) {
    var authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
        return res.redirect('auth/login');
    }

    var token = authorizationHeader.split(' ')[1];

    return jwt.verify(token, config.jwtSecret, function (err, decoded) {
        if (err) {
            return res.status(401);
        }

        var userId = decoded.sub;

        return User.findById(userId, function (userErr, user) {
            if (userErr || !user) {
                return res.status(401).end();
            }

            return next();
        });
    });
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _flashMessages = __webpack_require__(28);

var _flashMessages2 = _interopRequireDefault(_flashMessages);

var _redux = __webpack_require__(15);

var _filter = __webpack_require__(30);

var _filter2 = _interopRequireDefault(_filter);

var _auth = __webpack_require__(31);

var _auth2 = _interopRequireDefault(_auth);

var _blogs = __webpack_require__(32);

var _blogs2 = _interopRequireDefault(_blogs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    visibilityFilter: _filter2.default,
    flashMessages: _flashMessages2.default,
    blogs: _blogs2.default,
    auth: _auth2.default
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = __webpack_require__(6);

var _findIndex = __webpack_require__(29);

var _findIndex2 = _interopRequireDefault(_findIndex);

var _shortid = __webpack_require__(16);

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case _types.ADD_FLASH_MESSAGE:
            return [].concat(_toConsumableArray(state), [{
                id: _shortid2.default.generate(),
                type: action.message.type,
                text: action.message.text
            }]);
        case _types.DELETE_FLASH_MESSAGE:
            var index = (0, _findIndex2.default)(state, { id: action.message.id });

            if (index >= 0) {
                return [].concat(_toConsumableArray(state.slice(0, index)), _toConsumableArray(state.slice(index + 1)));
            }
            return state;
        default:
            return state;
    }
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("lodash/findIndex");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var visibilityFilter = function visibilityFilter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];

    switch (action.type) {
        case 'SEARCH_TEXT_FILTER':
            console.log(action);

            return action.filterText;
        default:
            return state;
    }
};

exports.default = visibilityFilter;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty = __webpack_require__(17);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _types = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    isAuthenticated: false,
    user: {}
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case _types.SET_CURRENT_USER:
            return {
                isAuthenticated: !(0, _isEmpty2.default)(action.user),
                user: action.user
            };
        default:
            return state;
    }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = __webpack_require__(6);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var blogs = function blogs() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _types.ADD_ARTICLE:
            return [].concat(_toConsumableArray(state), [action.payLoad]);
        case _types.REMOVE_ARTICLE:
            return state.filter(function (article) {
                return article.id != action.payLoad.id;
            });
        default:
            return state;
    }
};

exports.default = blogs;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _serializeJavascript = __webpack_require__(34);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (appComponent, preLoadedState) {
    return '<!doctype html>\n            <html lang="en">\n            <head>\n                <meta charset="UTF-8">\n                <meta name="viewport"\n                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n                <meta http-equiv="X-UA-Compatible" content="ie=edge">\n                <title>Basic ReactJS application</title>\n                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">\n                \n                <script src="/browser/index.bundle.js" defer></script>\n                <script>window.__INITIAL_DATA__ = ' + (0, _serializeJavascript2.default)(preLoadedState) + '</script>\n            </head>\n            \n            <body>\n                <div id="app">' + appComponent + '</div>\n            </body>\n        </html>';
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _navigationBar = __webpack_require__(37);

var _navigationBar2 = _interopRequireDefault(_navigationBar);

var _homePage = __webpack_require__(39);

var _homePage2 = _interopRequireDefault(_homePage);

var _blogsPage = __webpack_require__(40);

var _blogsPage2 = _interopRequireDefault(_blogsPage);

var _loginPage = __webpack_require__(46);

var _loginPage2 = _interopRequireDefault(_loginPage);

var _signUpPage = __webpack_require__(49);

var _signUpPage2 = _interopRequireDefault(_signUpPage);

var _flashMessagesList = __webpack_require__(52);

var _flashMessagesList2 = _interopRequireDefault(_flashMessagesList);

var _requireAuth = __webpack_require__(60);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_navigationBar2.default, null),
                _react2.default.createElement(_flashMessagesList2.default, null),
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _homePage2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/articles', component: (0, _requireAuth2.default)(_blogsPage2.default) }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/auth/login', component: _loginPage2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/signup', component: _signUpPage2.default })
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _authActions = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationBar = function (_React$Component) {
    _inherits(NavigationBar, _React$Component);

    function NavigationBar(props) {
        _classCallCheck(this, NavigationBar);

        var _this = _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this, props));

        _this.logout = function () {
            _this.props.logout();
        };
        return _this;
    }

    _createClass(NavigationBar, [{
        key: 'render',
        value: function render() {
            var isAuthenticated = this.props.auth.isAuthenticated;

            var userLinks = _react2.default.createElement(
                'ul',
                { className: 'navbar-nav mr-auto' },
                _react2.default.createElement(
                    'li',
                    { className: 'nav-item active' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { className: 'nav-link', to: '/' },
                        'Home'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { className: 'nav-item' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { className: 'nav-link', to: '/articles' },
                        'Articles'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { className: 'nav-item' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { className: 'nav-link', to: '#', onClick: this.logout },
                        'Logout'
                    )
                )
            );

            var guestLinks = _react2.default.createElement(
                'ul',
                { className: 'navbar-nav mr-auto' },
                _react2.default.createElement(
                    'li',
                    { className: 'nav-item active' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { className: 'nav-link', to: '/' },
                        'Home'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { className: 'nav-item' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { className: 'nav-link', to: '/auth/login' },
                        'Login'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { className: 'nav-item' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { className: 'nav-link', to: '/signup' },
                        'Signup'
                    )
                )
            );

            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-expand-lg navbar-light bg-light' },
                _react2.default.createElement(
                    'div',
                    { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
                    isAuthenticated ? userLinks : guestLinks
                )
            );
        }
    }]);

    return NavigationBar;
}(_react2.default.Component);

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { logout: _authActions.logout })(NavigationBar);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setAuthorizationToken = function setAuthorizationToken(token) {
    if (token) {
        _axios2.default.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        delete _axios2.default.defaults.headers.common['Authorization'];
    }
};

exports.default = setAuthorizationToken;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
    _inherits(HomePage, _React$Component);

    function HomePage(props) {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));
    }

    _createClass(HomePage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { marginTop: '20px' } },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Welcome!'
                )
            );
        }
    }]);

    return HomePage;
}(_react2.default.Component);

exports.default = HomePage;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _articlesFilter = __webpack_require__(69);

var _articlesFilter2 = _interopRequireDefault(_articlesFilter);

var _articleAdding = __webpack_require__(68);

var _articleAdding2 = _interopRequireDefault(_articleAdding);

var _articlesList = __webpack_require__(70);

var _articlesList2 = _interopRequireDefault(_articlesList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlogsPage = function BlogsPage() {
    return _react2.default.createElement(
        'div',
        { style: { marginTop: '20px' } },
        _react2.default.createElement(_articleAdding2.default, null),
        _react2.default.createElement(_articlesList2.default, null),
        _react2.default.createElement(_articlesFilter2.default, null)
    );
};

exports.default = BlogsPage;

/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var visibilityFilter = exports.visibilityFilter = function visibilityFilter(filterText) {
    return {
        type: 'SEARCH_TEXT_FILTER',
        filterText: filterText
    };
};

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _loginForm = __webpack_require__(47);

var _loginForm2 = _interopRequireDefault(_loginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_React$Component) {
    _inherits(LoginPage, _React$Component);

    function LoginPage(props) {
        _classCallCheck(this, LoginPage);

        return _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));
    }

    _createClass(LoginPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'mx-auto', style: { width: '400px', marginTop: '100px' } },
                    _react2.default.createElement(_loginForm2.default, null)
                )
            );
        }
    }]);

    return LoginPage;
}(_react2.default.Component);

exports.default = LoginPage;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _signup = __webpack_require__(9);

var _signup2 = _interopRequireDefault(_signup);

var _textFieldGroup = __webpack_require__(8);

var _textFieldGroup2 = _interopRequireDefault(_textFieldGroup);

var _authActions = __webpack_require__(18);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
    _inherits(LoginForm, _React$Component);

    function LoginForm(props) {
        _classCallCheck(this, LoginForm);

        var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

        _this.state = {
            isLoading: false,
            redirect: '',
            password: '',
            errors: {},
            email: ''
        };

        _this.isValid = function () {
            var _validateInput = (0, _signup2.default)(_this.state),
                errors = _validateInput.errors,
                isValid = _validateInput.isValid;

            if (!isValid) {
                _this.setState({ errors: errors });
            }

            return isValid;
        };

        _this.onSubmit = function (e) {
            e.preventDefault();

            if (_this.isValid()) {
                _this.setState({
                    isLoading: true,
                    errors: {}
                });

                _this.props.login({
                    password: _this.state.password,
                    email: _this.state.email
                }).then(function () {
                    _this.setState({ redirect: '/', isLoading: false });
                }, function (err) {
                    _this.setState({ errors: err.response.data, isLoading: false });
                });
            }
        };

        _this.onChange = function (event) {
            _this.setState(_defineProperty({}, event.target.name, event.target.value));
        };
        return _this;
    }

    _createClass(LoginForm, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                errors = _state.errors,
                isLoading = _state.isLoading,
                email = _state.email,
                password = _state.password,
                redirect = _state.redirect;


            if (redirect) {
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: redirect });
            }

            return _react2.default.createElement(
                'form',
                { onSubmit: this.onSubmit },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Login'
                ),
                errors.form && _react2.default.createElement(
                    'div',
                    { className: 'alert alert-danger' },
                    errors.form
                ),
                _react2.default.createElement(_textFieldGroup2.default, { onChange: this.onChange,
                    error: errors.email,
                    label: 'Email',
                    value: email,
                    field: 'email',
                    type: 'text' }),
                _react2.default.createElement(_textFieldGroup2.default, { onChange: this.onChange,
                    error: errors.password,
                    label: 'Password',
                    value: password,
                    field: 'password',
                    type: 'password' }),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-primary btn-lg', disabled: isLoading },
                        'Login'
                    )
                )
            );
        }
    }]);

    return LoginForm;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(null, { login: _authActions.login })(LoginForm);

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _signupForm = __webpack_require__(50);

var _signupForm2 = _interopRequireDefault(_signupForm);

var _reactRedux = __webpack_require__(1);

var _signupActions = __webpack_require__(51);

var _flashMessages = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUpPage = function (_React$Component) {
    _inherits(SignUpPage, _React$Component);

    function SignUpPage(props, context) {
        _classCallCheck(this, SignUpPage);

        return _possibleConstructorReturn(this, (SignUpPage.__proto__ || Object.getPrototypeOf(SignUpPage)).call(this, props, context));
    }

    _createClass(SignUpPage, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                userSignupRequest = _props.userSignupRequest,
                addFlashMessage = _props.addFlashMessage;


            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'mx-auto', style: { width: '400px', marginTop: '100px' } },
                    _react2.default.createElement(_signupForm2.default, { userSignupRequest: userSignupRequest, addFlashMessage: addFlashMessage })
                )
            );
        }
    }]);

    return SignUpPage;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(null, { userSignupRequest: _signupActions.userSignupRequest, addFlashMessage: _flashMessages.addFlashMessage })(SignUpPage);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _signup = __webpack_require__(9);

var _signup2 = _interopRequireDefault(_signup);

var _textFieldGroup = __webpack_require__(8);

var _textFieldGroup2 = _interopRequireDefault(_textFieldGroup);

var _reactRouterDom = __webpack_require__(3);

var _reactDom = __webpack_require__(2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUpForm = function (_React$Component) {
    _inherits(SignUpForm, _React$Component);

    function SignUpForm(props) {
        _classCallCheck(this, SignUpForm);

        var _this = _possibleConstructorReturn(this, (SignUpForm.__proto__ || Object.getPrototypeOf(SignUpForm)).call(this, props));

        _this.state = {
            isLoading: false,
            redirect: '',
            password: '',
            errors: {},
            email: ''
        };

        _this.isValid = function () {
            var _validateInput = (0, _signup2.default)(_this.state),
                errors = _validateInput.errors,
                isValid = _validateInput.isValid;

            if (!isValid) {
                _this.setState({ errors: errors });
            }

            return isValid;
        };

        _this.onSubmit = function (event) {
            event.preventDefault();

            // Pre-validation before submit form
            if (_this.isValid()) {
                _this.setState({
                    isLoading: true,
                    errors: {}
                });

                _this.props.userSignupRequest(_this.state).then(function (res) {
                    _this.props.addFlashMessage({
                        type: 'SUCCESS',
                        text: 'You have signed up successfully'
                    });
                    _this.setState({
                        isLoading: false,
                        redirect: '/'
                    });
                }, function (error) {
                    _this.setState({
                        errors: error.response.data,
                        isLoading: false
                    });
                });
            }
        };

        _this.onChange = function (event) {
            _this.setState(_defineProperty({}, event.target.name, event.target.value));
        };
        return _this;
    }

    _createClass(SignUpForm, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                errors = _state.errors,
                isLoading = _state.isLoading,
                email = _state.email,
                password = _state.password,
                redirect = _state.redirect;


            if (redirect) {
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
            }

            return _react2.default.createElement(
                'form',
                { onSubmit: this.onSubmit },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Sign up'
                ),
                errors.form && _react2.default.createElement(
                    'div',
                    { className: 'alert alert-danger' },
                    errors.form
                ),
                _react2.default.createElement(_textFieldGroup2.default, { onChange: this.onChange,
                    error: errors.email,
                    label: 'Email',
                    value: email,
                    field: 'email',
                    type: 'text' }),
                _react2.default.createElement(_textFieldGroup2.default, { onChange: this.onChange,
                    error: errors.password,
                    label: 'Password',
                    value: password,
                    field: 'password',
                    type: 'password' }),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-primary btn-lg', disabled: isLoading },
                        'Signup'
                    )
                )
            );
        }
    }]);

    return SignUpForm;
}(_react2.default.Component);

exports.default = SignUpForm;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userSignupRequest = undefined;

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSignupRequest = exports.userSignupRequest = function userSignupRequest(userData) {
    return function (dispatch) {
        return _axios2.default.post('/signup', userData);
    };
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _flashMessage = __webpack_require__(53);

var _flashMessage2 = _interopRequireDefault(_flashMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlashMessagesList = function (_React$Component) {
    _inherits(FlashMessagesList, _React$Component);

    function FlashMessagesList(props) {
        _classCallCheck(this, FlashMessagesList);

        return _possibleConstructorReturn(this, (FlashMessagesList.__proto__ || Object.getPrototypeOf(FlashMessagesList)).call(this, props));
    }

    _createClass(FlashMessagesList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.messages.map(function (message) {
                    return _react2.default.createElement(_flashMessage2.default, { key: message.id, message: message });
                })
            );
        }
    }]);

    return FlashMessagesList;
}(_react2.default.Component);

function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(FlashMessagesList);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _flashMessages = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlashMessage = function (_React$Component) {
    _inherits(FlashMessage, _React$Component);

    function FlashMessage(props) {
        _classCallCheck(this, FlashMessage);

        return _possibleConstructorReturn(this, (FlashMessage.__proto__ || Object.getPrototypeOf(FlashMessage)).call(this, props));
    }

    _createClass(FlashMessage, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var message = this.props.message;


            return _react2.default.createElement(
                'div',
                { className: 'alert' },
                message.text,
                _react2.default.createElement(
                    'button',
                    { className: 'close', onClick: function onClick() {
                            _this2.props.onDeleteFlashMessage(message);
                        } },
                    _react2.default.createElement(
                        'span',
                        null,
                        '\xD7'
                    )
                )
            );
        }
    }]);

    return FlashMessage;
}(_react2.default.Component);

function matchDispatchToProps(dispatch) {
    return {
        onDeleteFlashMessage: function onDeleteFlashMessage(message) {
            dispatch((0, _flashMessages.deleteFlashMessage)(message));
        }
    };
}

exports.default = (0, _reactRedux.connect)(null, matchDispatchToProps)(FlashMessage);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _renderedApp = __webpack_require__(13);

var _renderedApp2 = _interopRequireDefault(_renderedApp);

var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = __webpack_require__(63);


var router = _express2.default.Router();

router.get('/', function (req, res) {
    Article.find({}).then(function (articlesList) {
        res.send((0, _renderedApp2.default)(req, 'blogs', articlesList));
    }, function (err) {});
});

module.exports = router;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _signup = __webpack_require__(9);

var _signup2 = _interopRequireDefault(_signup);

var _renderedApp = __webpack_require__(13);

var _renderedApp2 = _interopRequireDefault(_renderedApp);

var _passport = __webpack_require__(11);

var _passport2 = _interopRequireDefault(_passport);

var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express2.default.Router();

router.get('/', function (req, res, next) {
    res.send((0, _renderedApp2.default)(req));
});

router.post('/', function (req, res, next) {
    // Validation of user's credentials
    var _validateInput = (0, _signup2.default)(req.body),
        errors = _validateInput.errors,
        isValid = _validateInput.isValid;

    if (!isValid) {
        return res.status(400).json(errors);
    }

    return _passport2.default.authenticate('local-signup', function (err) {
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(400).json({ form: 'The email has already token' });
            }

            return res.status(400).json({ form: 'Could not process the form.' });
        }

        return res.status(200).json({
            success: true,
            message: 'You have successfully signed up! Now you should be able to log in.'
        });
    })(req, res, next);
});

module.exports = router;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _passport = __webpack_require__(11);

var _passport2 = _interopRequireDefault(_passport);

var _signup = __webpack_require__(9);

var _signup2 = _interopRequireDefault(_signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express2.default.Router();

router.post('/login', function (req, res, next) {
    var _validateInput = (0, _signup2.default)(req.body),
        errors = _validateInput.errors,
        isValid = _validateInput.isValid;

    if (!isValid) {
        return res.status(401).json(errors);
    }

    return _passport2.default.authenticate('local-login', function (err, token, userData) {
        if (err) {
            if (err.name === 'IncorrectCredentialsError') {
                return res.status(400).json({ form: 'Incorrect email or password' });
            }

            return res.status(400).json({ form: 'Could not process the form.' });
        }

        return res.json({
            message: 'You have successfully logged in!',
            user: userData,
            success: true,
            token: token
        });
    })(req, res, next);
});

module.exports = router;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__(58);

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var atob = __webpack_require__(59);

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (ComposedComponent) {
    var Authenticate = function (_React$Component) {
        _inherits(Authenticate, _React$Component);

        function Authenticate(props) {
            _classCallCheck(this, Authenticate);

            var _this = _possibleConstructorReturn(this, (Authenticate.__proto__ || Object.getPrototypeOf(Authenticate)).call(this, props));

            _this.state = {
                redirect: ''
            };
            return _this;
        }

        _createClass(Authenticate, [{
            key: 'componentWillMount',
            value: function componentWillMount() {
                if (!this.props.isAuthenticated) {
                    this.setState({
                        redirect: '/auth/login'
                    });
                }
            }
        }, {
            key: 'render',
            value: function render() {
                if (this.state.redirect) {
                    return _react2.default.createElement(_reactRouterDom.Redirect, { to: this.state.redirect });
                }

                return _react2.default.createElement(ComposedComponent, this.props);
            }
        }]);

        return Authenticate;
    }(_react2.default.Component);

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated
        };
    }

    return (0, _reactRedux.connect)(mapStateToProps, { addFlashMessage: _flashMessages.addFlashMessage })(Authenticate);
};

var _flashMessages = __webpack_require__(20);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(62),
    deleteArticle = _require.deleteArticle,
    updateArticle = _require.updateArticle,
    createArticle = _require.createArticle,
    getArticle = _require.getArticle,
    getArticles = _require.getArticles;

var express = __webpack_require__(5);
var router = express.Router();

// CRUD Article requests
router.delete('/', deleteArticle);
router.put('/:id', updateArticle);
router.post('/', createArticle);
router.get('/:id', getArticle);
router.get('/', getArticles);

module.exports = router;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Article = __webpack_require__(63);

var getArticles = function getArticles(req, res, next) {
    Article.find({}).then(function (data) {
        return res.json(data);
    }, function (err) {
        next(err);
    });
};

var getArticle = function getArticle(req, res, next) {
    Article.find({ id: +req.params.id }).then(function (data) {
        return res.json(data);
    }, function (err) {
        next(err);
    });
};

var updateArticle = function updateArticle(req, res, next) {
    Article.findByIdAndUpdate({ id: +req.params.id }, { description: req.body.description, title: req.body.title }).then(function (data) {
        return res.json(data);
    }, function (err) {
        next(err);
    });
};

var createArticle = function createArticle(req, res) {
    Article.create({
        message: req.body.message,
        author: req.body.author,
        date: req.body.date,
        id: req.body.id
    }).then(function (data) {
        return res.json(data);
    }, function (err) {
        next(err);
    });
};

var deleteArticle = function deleteArticle(req, res, next) {
    Article.findByIdAndRemove(req.query.id).then(function (data) {
        return res.json(data);
    }, function (err) {
        next(err);
    });
};

module.exports.deleteArticle = deleteArticle;
module.exports.createArticle = createArticle;
module.exports.updateArticle = updateArticle;
module.exports.getArticles = getArticles;
module.exports.getArticle = getArticle;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(4);
var ArticlesSchema = new mongoose.Schema({
    message: String,
    author: String,
    date: String,
    id: String
});
var ArticlesModel = mongoose.model('ArticlesModel', ArticlesSchema);

module.exports = ArticlesModel;

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _articles = __webpack_require__(72);

var _textFieldGroup = __webpack_require__(8);

var _textFieldGroup2 = _interopRequireDefault(_textFieldGroup);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _shortid = __webpack_require__(16);

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleAdding = function (_React$Component) {
    _inherits(ArticleAdding, _React$Component);

    function ArticleAdding(initProps) {
        _classCallCheck(this, ArticleAdding);

        var _this = _possibleConstructorReturn(this, (ArticleAdding.__proto__ || Object.getPrototypeOf(ArticleAdding)).call(this, initProps));

        _this.state = {
            author: '',
            message: ''
        };

        _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        };

        _this.onSubmit = function (e) {
            var _this$state = _this.state,
                message = _this$state.message,
                author = _this$state.author;


            e.preventDefault();

            if (!message.trim() || !author.trim()) {
                return;
            }

            _axios2.default.post('/articles/api', {
                id: _shortid2.default.generate(),
                date: new Date(),
                message: message,
                author: author
            }).then(function (res) {
                _this.props.addArticle(res.data);
            }, function (err) {});

            _this.setState({
                message: '',
                author: ''
            });
        };
        return _this;
    }

    _createClass(ArticleAdding, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                message = _state.message,
                author = _state.author;


            return _react2.default.createElement(
                'form',
                { onSubmit: this.onSubmit },
                _react2.default.createElement(_textFieldGroup2.default, { label: 'Your article message',
                    onChange: this.onChange,
                    field: 'message',
                    value: message,
                    type: 'text' }),
                _react2.default.createElement(_textFieldGroup2.default, { onChange: this.onChange,
                    label: 'Author name',
                    field: 'author',
                    value: author,
                    type: 'text' }),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-primary btn-lg' },
                        'Add'
                    )
                )
            );
        }
    }]);

    return ArticleAdding;
}(_react2.default.Component);

function matchDispatchToProps(dispatch) {
    return {
        addArticle: function addArticle(article) {
            dispatch((0, _articles.addArticle)(article));
        }
    };
}

exports.default = (0, _reactRedux.connect)(null, matchDispatchToProps)(ArticleAdding);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _filter = __webpack_require__(42);

var _textFieldGroup = __webpack_require__(8);

var _textFieldGroup2 = _interopRequireDefault(_textFieldGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticlesFilter = function (_React$Component) {
    _inherits(ArticlesFilter, _React$Component);

    function ArticlesFilter(initProps) {
        _classCallCheck(this, ArticlesFilter);

        var _this = _possibleConstructorReturn(this, (ArticlesFilter.__proto__ || Object.getPrototypeOf(ArticlesFilter)).call(this, initProps));

        _this.state = {
            filter: ''
        };

        _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
            _this.props.visibilityFilter(e.target.value);
        };
        return _this;
    }

    _createClass(ArticlesFilter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_textFieldGroup2.default, { label: 'Filter by author name',
                onChange: this.onChange,
                value: this.state.filter,
                field: 'filter',
                type: 'text' });
        }
    }]);

    return ArticlesFilter;
}(_react2.default.Component);

function mapDispatchToProps(dispatch) {
    return {
        visibilityFilter: function visibilityFilter(filterText) {
            dispatch((0, _filter.visibilityFilter)(filterText));
        }
    };
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ArticlesFilter);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _articleItem = __webpack_require__(71);

var _articleItem2 = _interopRequireDefault(_articleItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticlesList = function (_React$Component) {
    _inherits(ArticlesList, _React$Component);

    function ArticlesList(initProps) {
        _classCallCheck(this, ArticlesList);

        return _possibleConstructorReturn(this, (ArticlesList.__proto__ || Object.getPrototypeOf(ArticlesList)).call(this, initProps));
    }

    _createClass(ArticlesList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'articlesList' },
                this.props.articles ? this.props.articles.map(function (articleItem) {
                    return _react2.default.createElement(_articleItem2.default, { key: articleItem.id, blog: articleItem });
                }) : ''
            );
        }
    }]);

    return ArticlesList;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        articles: state.visibilityFilter ? state.blogs.filter(function (article) {
            return article.message.indexOf(state.visibilityFilter) !== -1;
        }) : state.blogs
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ArticlesList);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _articles = __webpack_require__(72);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleItem = function (_React$Component) {
    _inherits(ArticleItem, _React$Component);

    function ArticleItem(initProps) {
        _classCallCheck(this, ArticleItem);

        var _this = _possibleConstructorReturn(this, (ArticleItem.__proto__ || Object.getPrototypeOf(ArticleItem)).call(this, initProps));

        _this.removeArticle = function () {
            _axios2.default.delete('/articles/api', { params: { id: _this.props.blog._id } }).then(function (deletedArticle) {
                _this.props.removeArticle(deletedArticle.data);
            }, function (err) {});
        };
        return _this;
    }

    _createClass(ArticleItem, [{
        key: 'render',
        value: function render() {
            var _props$blog = this.props.blog,
                articleDate = _props$blog.date,
                articleMessage = _props$blog.message,
                articleAuthor = _props$blog.author;


            return _react2.default.createElement(
                'article',
                { className: 'blogsList-blogItem card', style: { marginBottom: '20px' } },
                _react2.default.createElement(
                    'p',
                    { className: 'card-header' },
                    _react2.default.createElement(
                        'b',
                        null,
                        'Author: ',
                        articleAuthor
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'card-body' },
                    _react2.default.createElement(
                        'p',
                        { className: 'blogText card-title' },
                        articleMessage
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'blogDate card-text' },
                        new Date(articleDate).toLocaleTimeString()
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.removeArticle, className: 'btn btn-primary' },
                        'Remove'
                    )
                )
            );
        }
    }]);

    return ArticleItem;
}(_react2.default.Component);

function matchDispatchToProps(dispatch) {
    return {
        removeArticle: function removeArticle(article) {
            dispatch((0, _articles.removeArticle)(article));
        }
    };
}

exports.default = (0, _reactRedux.connect)(null, matchDispatchToProps)(ArticleItem);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addArticle = exports.removeArticle = undefined;

var _types = __webpack_require__(6);

var removeArticle = exports.removeArticle = function removeArticle(article) {
    return {
        type: _types.REMOVE_ARTICLE,
        payLoad: article
    };
};

var addArticle = exports.addArticle = function addArticle(article) {
    return {
        type: _types.ADD_ARTICLE,
        payLoad: article
    };
};

/***/ })
/******/ ]);