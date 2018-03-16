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
                sub: user._id
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

var _redux = __webpack_require__(11);

var _filter = __webpack_require__(21);

var _filter2 = _interopRequireDefault(_filter);

var _blogs = __webpack_require__(22);

var _blogs2 = _interopRequireDefault(_blogs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allReducer = (0, _redux.combineReducers)({
    visibilityFilter: _filter2.default,
    blogs: _blogs2.default
});

exports.default = allReducer;

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

var _Auth = __webpack_require__(37);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_React$Component) {
    _inherits(LoginPage, _React$Component);

    function LoginPage(props) {
        _classCallCheck(this, LoginPage);

        var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

        _this.state = {
            errors: {},
            user: {
                email: '',
                password: ''
            }
        };

        _this.processForm = _this.processForm.bind(_this);
        _this.changeUser = _this.changeUser.bind(_this);
        return _this;
    }

    _createClass(LoginPage, [{
        key: 'changeUser',
        value: function changeUser(event) {
            var field = event.target.name;
            var user = this.state.user;
            user[field] = event.target.value;

            this.setState({
                user: user
            });
        }
    }, {
        key: 'processForm',
        value: function processForm(event) {
            var _this2 = this;

            event.preventDefault();

            var email = encodeURIComponent(this.state.user.email);
            var password = encodeURIComponent(this.state.user.password);
            var formData = 'email=' + email + '&password=' + password;

            var xhr = new XMLHttpRequest();
            xhr.open('post', '/auth/login');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.responseType = 'json';

            xhr.addEventListener('load', function () {
                if (xhr.status === 200) {

                    // change the component-container state
                    _this2.setState({
                        errors: {}
                    });

                    _Auth2.default.authenticateUser(xhr.response.token);
                } else {
                    // failure
                    var errors = xhr.response.errors ? xhr.response.errors : {};
                    errors.summary = xhr.response.message;

                    _this2.setState({
                        errors: errors
                    });
                }
            });
            xhr.send(formData);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_loginForm2.default, {
                onSubmit: this.processForm,
                onChange: this.changeUser,
                user: this.state.user
            });
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginForm = function LoginForm(_ref) {
    var onSubmit = _ref.onSubmit,
        onChange = _ref.onChange,
        errors = _ref.errors,
        user = _ref.user;
    return _react2.default.createElement(
        "form",
        { action: "/", onSubmit: onSubmit },
        _react2.default.createElement(
            "h2",
            null,
            "Login"
        ),
        _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
                "label",
                null,
                "Email"
            ),
            _react2.default.createElement("input", { type: "text", name: "email", onChange: onChange, value: user.email })
        ),
        _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
                "label",
                null,
                "Password"
            ),
            _react2.default.createElement("input", { type: "password", name: "password", onChange: onChange, value: user.password })
        ),
        _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
                "button",
                { type: "submit" },
                "Login"
            )
        )
    );
};

exports.default = LoginForm;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth = function () {
    function Auth() {
        _classCallCheck(this, Auth);
    }

    _createClass(Auth, null, [{
        key: 'authenticateUser',


        /**
         * Authenticate a user. Save a token string in Local Storage
         *
         * @param {string} token
         */
        value: function authenticateUser(token) {
            localStorage.setItem('token', token);
        }

        /**
         * Check if a user is authenticated - check if a token is saved in Local Storage
         *
         * @returns {boolean}
         */

    }, {
        key: 'isUserAuthenticated',
        value: function isUserAuthenticated() {
            return localStorage.getItem('token') !== null;
        }

        /**
         * Deauthenticate a user. Remove a token from Local Storage.
         *
         */

    }, {
        key: 'deauthenticateUser',
        value: function deauthenticateUser() {
            localStorage.removeItem('token');
        }

        /**
         * Get a token value.
         *
         * @returns {string}
         */

    }, {
        key: 'getToken',
        value: function getToken() {
            return localStorage.getItem('token');
        }
    }]);

    return Auth;
}();

exports.default = Auth;

/***/ }),
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
            var userSignupRequest = this.props.userSignupRequest;


            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-4 col-md-offset-4' },
                    _react2.default.createElement(_signupForm2.default, { userSignupRequest: userSignupRequest })
                )
            );
        }
    }]);

    return SignUpPage;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(null, { userSignupRequest: _signupActions.userSignupRequest })(SignUpPage);

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
        _react2.default.createElement("input", { placeholder: "Put your email",
            className: "form-control",
            onChange: onChange,
            value: value,
            name: field,
            type: type
        }),
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
                return res.status(409).json({
                    success: false,
                    message: 'Check the form for errors.',
                    errors: {
                        email: 'This email is already taken.'
                    }
                });
            }

            return res.status(400).json({
                success: false,
                message: 'Could not process the form.'
            });
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express2.default.Router();

router.post('/login', function (req, res, next) {
    return _passport2.default.authenticate('local-login', function (err, token, userData) {
        if (err) {
            if (err.name === 'IncorrectCredentialsError') {
                return res.status(400).json({
                    success: false,
                    message: err.message
                });
            }

            return res.status(400).json({
                success: false,
                message: 'Could not process the form.'
            });
        }

        return res.json({
            success: true,
            message: 'You have successfully logged in!',
            token: token,
            user: userData
        });
    })(req, res, next);
});

module.exports = router;

/***/ })
/******/ ]);