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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    dbURI: "mongodb://kostya.aderiho:aderiho280993@ds121118.mlab.com:21118/frontcamp",
    jwtSecret: 'somesecretjwttokenstring'
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(11);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(20);

var _index2 = _interopRequireDefault(_index);

var _indexTemplate = __webpack_require__(23);

var _indexTemplate2 = _interopRequireDefault(_indexTemplate);

var _server = __webpack_require__(25);

var _server2 = _interopRequireDefault(_server);

var _reactRouterDom = __webpack_require__(7);

var _app = __webpack_require__(26);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create store on server-side
var renderedApp = function renderedApp(req) {
    var store = (0, _redux.createStore)(_index2.default);
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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var removeBlog = exports.removeBlog = function removeBlog(blog) {
    return {
        type: 'REMOVE_BLOG',
        payLoad: blog
    };
};

var addBlog = exports.addBlog = function addBlog(blog) {
    return {
        type: 'ADD_BLOG',
        payLoad: blog
    };
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validator = __webpack_require__(40);

var _validator2 = _interopRequireDefault(_validator);

var _isEmpty = __webpack_require__(41);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _db = __webpack_require__(4);

var _db2 = _interopRequireDefault(_db);

var _passport = __webpack_require__(5);

var _passport2 = _interopRequireDefault(_passport);

var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = __webpack_require__(6);

var _express2 = _interopRequireDefault(_express);

var _localSignup = __webpack_require__(15);

var _localSignup2 = _interopRequireDefault(_localSignup);

var _localLogin = __webpack_require__(18);

var _localLogin2 = _interopRequireDefault(_localLogin);

var _authCheck = __webpack_require__(19);

var _authCheck2 = _interopRequireDefault(_authCheck);

var _renderedApp = __webpack_require__(10);

var _renderedApp2 = _interopRequireDefault(_renderedApp);

var _signup = __webpack_require__(45);

var _signup2 = _interopRequireDefault(_signup);

var _auth = __webpack_require__(46);

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

app.use('/blogs', _authCheck2.default, function (req, res) {
    return res.send((0, _renderedApp2.default)(req));
});
app.use('/signup', _signup2.default);
app.use('/auth', _auth2.default);
app.use('/', function (req, res) {
    return res.send((0, _renderedApp2.default)(req));
});

app.listen(3000, function () {
    console.log('Server is running on: 3000 port');
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PassportLocalStrategy = __webpack_require__(8).Strategy;
var User = __webpack_require__(16);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(3);
var bcrypt = __webpack_require__(17);

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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PassportLocalStrategy = __webpack_require__(8).Strategy;
var User = __webpack_require__(3).model('UserModel');
var config = __webpack_require__(4);
var jwt = __webpack_require__(9);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var User = __webpack_require__(3).model('UserModel');
var config = __webpack_require__(4);
var jwt = __webpack_require__(9);

module.exports = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.redirect('auth/login');
    }

    var token = req.headers.authorization.split(' ')[1];

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _flashMessages = __webpack_require__(48);

var _flashMessages2 = _interopRequireDefault(_flashMessages);

var _redux = __webpack_require__(11);

var _filter = __webpack_require__(21);

var _filter2 = _interopRequireDefault(_filter);

var _blogs = __webpack_require__(22);

var _blogs2 = _interopRequireDefault(_blogs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    visibilityFilter: _filter2.default,
    flashMessages: _flashMessages2.default,
    blogs: _blogs2.default
});

/***/ }),
/* 21 */
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
            return action.filterText;
        default:
            return state;
    }
};

exports.default = visibilityFilter;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var blogs = function blogs() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_BLOG':
            return [].concat(_toConsumableArray(state), [action.payLoad]);
        case 'REMOVE_BLOG':
            return state.filter(function (blog) {
                return blog.id != action.payLoad.id;
            });
        default:
            return state;
    }
};

exports.default = blogs;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _serializeJavascript = __webpack_require__(24);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (appComponent, preLoadedState) {
    return '<!doctype html>\n            <html lang="en">\n            <head>\n                <meta charset="UTF-8">\n                <meta name="viewport"\n                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n                <meta http-equiv="X-UA-Compatible" content="ie=edge">\n                <title>Basic ReactJS application</title>\n                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">\n                \n                <script src="/browser/index.bundle.js" defer></script>\n                <script>window.__INITIAL_DATA__ = ' + (0, _serializeJavascript2.default)(preLoadedState) + '</script>\n            </head>\n            \n            <body>\n                <div id="app">' + appComponent + '</div>\n            </body>\n        </html>';
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(7);

var _navigationBar = __webpack_require__(27);

var _navigationBar2 = _interopRequireDefault(_navigationBar);

var _homePage = __webpack_require__(28);

var _homePage2 = _interopRequireDefault(_homePage);

var _blogsPage = __webpack_require__(29);

var _blogsPage2 = _interopRequireDefault(_blogsPage);

var _loginPage = __webpack_require__(35);

var _loginPage2 = _interopRequireDefault(_loginPage);

var _signUpPage = __webpack_require__(38);

var _signUpPage2 = _interopRequireDefault(_signUpPage);

var _flashMessagesList = __webpack_require__(63);

var _flashMessagesList2 = _interopRequireDefault(_flashMessagesList);

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
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/articles', component: _blogsPage2.default }),
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationBar = function (_React$Component) {
    _inherits(NavigationBar, _React$Component);

    function NavigationBar() {
        _classCallCheck(this, NavigationBar);

        return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(this, arguments));
    }

    _createClass(NavigationBar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-expand-lg navbar-light bg-light' },
                _react2.default.createElement(
                    'div',
                    { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
                    _react2.default.createElement(
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
                                { className: 'nav-link', to: '/blogs' },
                                'Articles'
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
                    )
                )
            );
        }
    }]);

    return NavigationBar;
}(_react2.default.Component);

exports.default = NavigationBar;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

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
                null,
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _blogsFilter = __webpack_require__(30);

var _blogsFilter2 = _interopRequireDefault(_blogsFilter);

var _blogAdding = __webpack_require__(32);

var _blogAdding2 = _interopRequireDefault(_blogAdding);

var _blogsList = __webpack_require__(33);

var _blogsList2 = _interopRequireDefault(_blogsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlogsPage = function BlogsPage() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_blogAdding2.default, null),
        _react2.default.createElement(_blogsList2.default, null),
        _react2.default.createElement(_blogsFilter2.default, null)
    );
};

exports.default = BlogsPage;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _filter = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogsFilter = function (_React$Component) {
    _inherits(BlogsFilter, _React$Component);

    function BlogsFilter(initProps) {
        _classCallCheck(this, BlogsFilter);

        return _possibleConstructorReturn(this, (BlogsFilter.__proto__ || Object.getPrototypeOf(BlogsFilter)).call(this, initProps));
    }

    _createClass(BlogsFilter, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var filterInput = void 0;

            return _react2.default.createElement('input', { onChange: function onChange() {
                    return _this2.props.onChange(filterInput.value);
                },
                placeholder: 'Filter by author name',
                ref: function ref(node) {
                    return filterInput = node;
                },
                type: 'text' });
        }
    }]);

    return BlogsFilter;
}(_react2.default.Component);

function mapDispatchToProps(dispatch) {
    return {
        onChange: function onChange(filterText) {
            dispatch((0, _filter.visibilityFilter)(filterText));
        }
    };
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(BlogsFilter);

/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _blogs = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nextBlogId = 0;

var BlogAdding = function (_React$Component) {
    _inherits(BlogAdding, _React$Component);

    function BlogAdding(initProps) {
        _classCallCheck(this, BlogAdding);

        return _possibleConstructorReturn(this, (BlogAdding.__proto__ || Object.getPrototypeOf(BlogAdding)).call(this, initProps));
    }

    _createClass(BlogAdding, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var inputMessage = void 0;
            var inputAuthor = void 0;

            return _react2.default.createElement(
                'form',
                { onSubmit: function onSubmit(e) {
                        e.preventDefault();

                        if (!inputMessage.value.trim() || !inputAuthor.value.trim()) {
                            return;
                        }

                        _this2.props.onSubmit({
                            author: inputAuthor.value,
                            text: inputMessage.value,
                            id: nextBlogId++,
                            date: new Date()
                        });

                        inputMessage.value = inputAuthor.value = '';
                    } },
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'label',
                        null,
                        'Put your message there: ',
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('input', { ref: function ref(node) {
                                inputMessage = node;
                            },
                            placeholder: 'Your message',
                            type: 'text'
                        })
                    )
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'label',
                        null,
                        'Author name: ',
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('input', { ref: function ref(node) {
                                inputAuthor = node;
                            },
                            placeholder: 'Author nickname',
                            type: 'text'
                        })
                    )
                ),
                _react2.default.createElement(
                    'button',
                    { type: 'submit', value: 'Submit' },
                    'Add'
                )
            );
        }
    }]);

    return BlogAdding;
}(_react2.default.Component);

function matchDispatchToProps(dispatch) {
    return {
        onSubmit: function onSubmit(blog) {
            dispatch((0, _blogs.addBlog)(blog));
        }
    };
}

exports.default = (0, _reactRedux.connect)(null, matchDispatchToProps)(BlogAdding);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _blogItem = __webpack_require__(34);

var _blogItem2 = _interopRequireDefault(_blogItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogsList = function (_React$Component) {
    _inherits(BlogsList, _React$Component);

    function BlogsList(initProps) {
        _classCallCheck(this, BlogsList);

        return _possibleConstructorReturn(this, (BlogsList.__proto__ || Object.getPrototypeOf(BlogsList)).call(this, initProps));
    }

    _createClass(BlogsList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'blogsList' },
                this.props.blogs ? this.props.blogs.map(function (blogItem) {
                    return _react2.default.createElement(_blogItem2.default, { key: blogItem.id, blog: blogItem });
                }) : ''
            );
        }
    }]);

    return BlogsList;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        blogs: state.visibilityFilter ? state.blogs.filter(function (blog) {
            return blog.text.indexOf(state.visibilityFilter) !== -1;
        }) : state.blogs
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(BlogsList);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _blogs = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogItem = function (_React$Component) {
    _inherits(BlogItem, _React$Component);

    function BlogItem(initProps) {
        _classCallCheck(this, BlogItem);

        return _possibleConstructorReturn(this, (BlogItem.__proto__ || Object.getPrototypeOf(BlogItem)).call(this, initProps));
    }

    _createClass(BlogItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$blog = this.props.blog,
                blogDate = _props$blog.date,
                blogText = _props$blog.text,
                blogAuthor = _props$blog.author;


            return _react2.default.createElement(
                'article',
                { className: 'blogsList-blogItem' },
                _react2.default.createElement(
                    'p',
                    { className: 'blogText' },
                    blogText
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'blogDate' },
                    blogDate.toLocaleTimeString()
                ),
                _react2.default.createElement('input', { type: 'button', value: 'x', onClick: function onClick() {
                        return _this2.props.onRemoveBlog(_this2.props.blog);
                    } }),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'b',
                        null,
                        'Author: ',
                        blogAuthor
                    )
                )
            );
        }
    }]);

    return BlogItem;
}(_react2.default.Component);

function matchDispatchToProps(dispatch) {
    return {
        onRemoveBlog: function onRemoveBlog(blog) {
            dispatch((0, _blogs.removeBlog)(blog));
        }
    };
}

exports.default = (0, _reactRedux.connect)(null, matchDispatchToProps)(BlogItem);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _loginForm = __webpack_require__(36);

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
                    { className: 'col-md-4 col-md-off-set-4' },
                    _react2.default.createElement(_loginForm2.default, null)
                )
            );
        }
    }]);

    return LoginPage;
}(_react2.default.Component);

exports.default = LoginPage;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _signup = __webpack_require__(13);

var _signup2 = _interopRequireDefault(_signup);

var _textFieldGroup = __webpack_require__(42);

var _textFieldGroup2 = _interopRequireDefault(_textFieldGroup);

var _authActions = __webpack_require__(67);

var _reactRouterDom = __webpack_require__(7);

var _reactRedux = __webpack_require__(2);

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
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _signupForm = __webpack_require__(39);

var _signupForm2 = _interopRequireDefault(_signupForm);

var _reactRedux = __webpack_require__(2);

var _signupActions = __webpack_require__(43);

var _flashMessages = __webpack_require__(49);

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
                    { className: 'col-md-4 col-md-offset-4' },
                    _react2.default.createElement(_signupForm2.default, { userSignupRequest: userSignupRequest, addFlashMessage: addFlashMessage })
                )
            );
        }
    }]);

    return SignUpPage;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(null, { userSignupRequest: _signupActions.userSignupRequest, addFlashMessage: _flashMessages.addFlashMessage })(SignUpPage);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _signup = __webpack_require__(13);

var _signup2 = _interopRequireDefault(_signup);

var _textFieldGroup = __webpack_require__(42);

var _textFieldGroup2 = _interopRequireDefault(_textFieldGroup);

var _reactRouterDom = __webpack_require__(7);

var _reactDom = __webpack_require__(1);

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
/* 40 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 42 */
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userSignupRequest = undefined;

var _axios = __webpack_require__(44);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSignupRequest = exports.userSignupRequest = function userSignupRequest(userData) {
    return function (dispatch) {
        return _axios2.default.post('/signup', userData);
    };
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _signup = __webpack_require__(13);

var _signup2 = _interopRequireDefault(_signup);

var _renderedApp = __webpack_require__(10);

var _renderedApp2 = _interopRequireDefault(_renderedApp);

var _passport = __webpack_require__(5);

var _passport2 = _interopRequireDefault(_passport);

var _express = __webpack_require__(6);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(6);

var _express2 = _interopRequireDefault(_express);

var _passport = __webpack_require__(5);

var _passport2 = _interopRequireDefault(_passport);

var _signup = __webpack_require__(13);

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
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = __webpack_require__(62);

var _findIndex = __webpack_require__(65);

var _findIndex2 = _interopRequireDefault(_findIndex);

var _shortid = __webpack_require__(53);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteFlashMessage = exports.addFlashMessage = undefined;

var _types = __webpack_require__(62);

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
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(55);

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

module.exports = {
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomByte = __webpack_require__(56);

function encode(lookup, number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = encode;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(54);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(51);
var encode = __webpack_require__(52);
var decode = __webpack_require__(58);
var build = __webpack_require__(59);
var isValid = __webpack_require__(60);

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(61) || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = __webpack_require__(57);
var randomBytes = crypto.randomBytes;

function randomByte() {
    return randomBytes(1)[0] & 0x30;
}

module.exports = randomByte;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(51);

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the shortid-generated id.
 */
function decode(id) {
    var characters = alphabet.shuffled();
    return {
        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
    };
}

module.exports = decode;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var encode = __webpack_require__(52);
var alphabet = __webpack_require__(51);

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 6;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {

    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + encode(alphabet.lookup, version);
    str = str + encode(alphabet.lookup, clusterWorkerId);
    if (counter > 0) {
        str = str + encode(alphabet.lookup, counter);
    }
    str = str + encode(alphabet.lookup, seconds);

    return str;
}

module.exports = build;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(51);

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var characters = alphabet.characters();
    var len = id.length;
    for(var i = 0; i < len;i++) {
        if (characters.indexOf(id[i]) === -1) {
            return false;
        }
    }
    return true;
}

module.exports = isShortId;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = parseInt(process.env.NODE_UNIQUE_ID || 0, 10);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_FLASH_MESSAGE = exports.ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
var DELETE_FLASH_MESSAGE = exports.DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE';

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _flashMessage = __webpack_require__(64);

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _flashMessages = __webpack_require__(49);

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
/* 65 */
/***/ (function(module, exports) {

module.exports = require("lodash/findIndex");

/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = undefined;

var _axios = __webpack_require__(44);

var _axios2 = _interopRequireDefault(_axios);

var _setAuthorizationToken = __webpack_require__(68);

var _setAuthorizationToken2 = _interopRequireDefault(_setAuthorizationToken);

var _jsonwebtoken = __webpack_require__(9);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function login(userData) {
    return function (dispatch) {
        return _axios2.default.post('/auth/login', userData).then(function (res) {
            var token = res.data.token;

            localStorage.setItem('jwtToken', token);
            (0, _setAuthorizationToken2.default)(token);

            console.log(_jsonwebtoken2.default.decode(token));
        });
    };
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(44);

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

/***/ })
/******/ ]);