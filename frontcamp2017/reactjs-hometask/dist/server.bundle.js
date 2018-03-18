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

var _googleLogin = __webpack_require__(85);

var _googleLogin2 = _interopRequireDefault(_googleLogin);

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
_passport2.default.use(_googleLogin2.default);
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

    newUser.local = {
        email: email.trim(),
        password: newUser.generateHash(password.trim())
    };

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
    bcrypt.compare(password, this.local.password, callback);
};

UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

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
    return User.findOne({ 'local.email': email }, function (err, user) {
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
                email: user.local.email
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
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '/auth/google', className: 'btn btn--primary' },
                        'Google+'
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

router.get('/google', _passport2.default.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', _passport2.default.authenticate('google'), function (req, res) {
    res.redirect('/');
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

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// Load modules.
var Strategy = __webpack_require__(88)
  , AuthorizationError = __webpack_require__(82)
  , TokenError = __webpack_require__(83)
  , InternalOAuthError = __webpack_require__(84);


// Expose Strategy.
exports = module.exports = Strategy;

// Exports.
exports.Strategy = Strategy;

exports.AuthorizationError = AuthorizationError;
exports.TokenError = TokenError;
exports.InternalOAuthError = InternalOAuthError;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var crypto= __webpack_require__(74),
    sha1= __webpack_require__(93),
    http= __webpack_require__(78),
    https= __webpack_require__(79),
    URL= __webpack_require__(73),
    querystring= __webpack_require__(80),
    OAuthUtils= __webpack_require__(81);

exports.OAuth= function(requestUrl, accessUrl, consumerKey, consumerSecret, version, authorize_callback, signatureMethod, nonceSize, customHeaders) {
  this._isEcho = false;

  this._requestUrl= requestUrl;
  this._accessUrl= accessUrl;
  this._consumerKey= consumerKey;
  this._consumerSecret= this._encodeData( consumerSecret );
  if (signatureMethod == "RSA-SHA1") {
    this._privateKey = consumerSecret;
  }
  this._version= version;
  if( authorize_callback === undefined ) {
    this._authorize_callback= "oob";
  }
  else {
    this._authorize_callback= authorize_callback;
  }

  if( signatureMethod != "PLAINTEXT" && signatureMethod != "HMAC-SHA1" && signatureMethod != "RSA-SHA1")
    throw new Error("Un-supported signature method: " + signatureMethod )
  this._signatureMethod= signatureMethod;
  this._nonceSize= nonceSize || 32;
  this._headers= customHeaders || {"Accept" : "*/*",
                                   "Connection" : "close",
                                   "User-Agent" : "Node authentication"}
  this._clientOptions= this._defaultClientOptions= {"requestTokenHttpMethod": "POST",
                                                    "accessTokenHttpMethod": "POST",
                                                    "followRedirects": true};
  this._oauthParameterSeperator = ",";
};

exports.OAuthEcho= function(realm, verify_credentials, consumerKey, consumerSecret, version, signatureMethod, nonceSize, customHeaders) {
  this._isEcho = true;

  this._realm= realm;
  this._verifyCredentials = verify_credentials;
  this._consumerKey= consumerKey;
  this._consumerSecret= this._encodeData( consumerSecret );
  if (signatureMethod == "RSA-SHA1") {
    this._privateKey = consumerSecret;
  }
  this._version= version;

  if( signatureMethod != "PLAINTEXT" && signatureMethod != "HMAC-SHA1" && signatureMethod != "RSA-SHA1")
    throw new Error("Un-supported signature method: " + signatureMethod );
  this._signatureMethod= signatureMethod;
  this._nonceSize= nonceSize || 32;
  this._headers= customHeaders || {"Accept" : "*/*",
                                   "Connection" : "close",
                                   "User-Agent" : "Node authentication"};
  this._oauthParameterSeperator = ",";
}

exports.OAuthEcho.prototype = exports.OAuth.prototype;

exports.OAuth.prototype._getTimestamp= function() {
  return Math.floor( (new Date()).getTime() / 1000 );
}

exports.OAuth.prototype._encodeData= function(toEncode){
 if( toEncode == null || toEncode == "" ) return ""
 else {
    var result= encodeURIComponent(toEncode);
    // Fix the mismatch between OAuth's  RFC3986's and Javascript's beliefs in what is right and wrong ;)
    return result.replace(/\!/g, "%21")
                 .replace(/\'/g, "%27")
                 .replace(/\(/g, "%28")
                 .replace(/\)/g, "%29")
                 .replace(/\*/g, "%2A");
 }
}

exports.OAuth.prototype._decodeData= function(toDecode) {
  if( toDecode != null ) {
    toDecode = toDecode.replace(/\+/g, " ");
  }
  return decodeURIComponent( toDecode);
}

exports.OAuth.prototype._getSignature= function(method, url, parameters, tokenSecret) {
  var signatureBase= this._createSignatureBase(method, url, parameters);
  return this._createSignature( signatureBase, tokenSecret );
}

exports.OAuth.prototype._normalizeUrl= function(url) {
  var parsedUrl= URL.parse(url, true)
   var port ="";
   if( parsedUrl.port ) {
     if( (parsedUrl.protocol == "http:" && parsedUrl.port != "80" ) ||
         (parsedUrl.protocol == "https:" && parsedUrl.port != "443") ) {
           port= ":" + parsedUrl.port;
         }
   }

  if( !parsedUrl.pathname  || parsedUrl.pathname == "" ) parsedUrl.pathname ="/";

  return parsedUrl.protocol + "//" + parsedUrl.hostname + port + parsedUrl.pathname;
}

// Is the parameter considered an OAuth parameter
exports.OAuth.prototype._isParameterNameAnOAuthParameter= function(parameter) {
  var m = parameter.match('^oauth_');
  if( m && ( m[0] === "oauth_" ) ) {
    return true;
  }
  else {
    return false;
  }
};

// build the OAuth request authorization header
exports.OAuth.prototype._buildAuthorizationHeaders= function(orderedParameters) {
  var authHeader="OAuth ";
  if( this._isEcho ) {
    authHeader += 'realm="' + this._realm + '",';
  }

  for( var i= 0 ; i < orderedParameters.length; i++) {
     // Whilst the all the parameters should be included within the signature, only the oauth_ arguments
     // should appear within the authorization header.
     if( this._isParameterNameAnOAuthParameter(orderedParameters[i][0]) ) {
      authHeader+= "" + this._encodeData(orderedParameters[i][0])+"=\""+ this._encodeData(orderedParameters[i][1])+"\""+ this._oauthParameterSeperator;
     }
  }

  authHeader= authHeader.substring(0, authHeader.length-this._oauthParameterSeperator.length);
  return authHeader;
}

// Takes an object literal that represents the arguments, and returns an array
// of argument/value pairs.
exports.OAuth.prototype._makeArrayOfArgumentsHash= function(argumentsHash) {
  var argument_pairs= [];
  for(var key in argumentsHash ) {
    if (argumentsHash.hasOwnProperty(key)) {
       var value= argumentsHash[key];
       if( Array.isArray(value) ) {
         for(var i=0;i<value.length;i++) {
           argument_pairs[argument_pairs.length]= [key, value[i]];
         }
       }
       else {
         argument_pairs[argument_pairs.length]= [key, value];
       }
    }
  }
  return argument_pairs;
}

// Sorts the encoded key value pairs by encoded name, then encoded value
exports.OAuth.prototype._sortRequestParams= function(argument_pairs) {
  // Sort by name, then value.
  argument_pairs.sort(function(a,b) {
      if ( a[0]== b[0] )  {
        return a[1] < b[1] ? -1 : 1;
      }
      else return a[0] < b[0] ? -1 : 1;
  });

  return argument_pairs;
}

exports.OAuth.prototype._normaliseRequestParams= function(args) {
  var argument_pairs= this._makeArrayOfArgumentsHash(args);
  // First encode them #3.4.1.3.2 .1
  for(var i=0;i<argument_pairs.length;i++) {
    argument_pairs[i][0]= this._encodeData( argument_pairs[i][0] );
    argument_pairs[i][1]= this._encodeData( argument_pairs[i][1] );
  }

  // Then sort them #3.4.1.3.2 .2
  argument_pairs= this._sortRequestParams( argument_pairs );

  // Then concatenate together #3.4.1.3.2 .3 & .4
  var args= "";
  for(var i=0;i<argument_pairs.length;i++) {
      args+= argument_pairs[i][0];
      args+= "="
      args+= argument_pairs[i][1];
      if( i < argument_pairs.length-1 ) args+= "&";
  }
  return args;
}

exports.OAuth.prototype._createSignatureBase= function(method, url, parameters) {
  url= this._encodeData( this._normalizeUrl(url) );
  parameters= this._encodeData( parameters );
  return method.toUpperCase() + "&" + url + "&" + parameters;
}

exports.OAuth.prototype._createSignature= function(signatureBase, tokenSecret) {
   if( tokenSecret === undefined ) var tokenSecret= "";
   else tokenSecret= this._encodeData( tokenSecret );
   // consumerSecret is already encoded
   var key= this._consumerSecret + "&" + tokenSecret;

   var hash= ""
   if( this._signatureMethod == "PLAINTEXT" ) {
     hash= key;
   }
   else if (this._signatureMethod == "RSA-SHA1") {
     key = this._privateKey || "";
     hash= crypto.createSign("RSA-SHA1").update(signatureBase).sign(key, 'base64');
   }
   else {
       if( crypto.Hmac ) {
         hash = crypto.createHmac("sha1", key).update(signatureBase).digest("base64");
       }
       else {
         hash= sha1.HMACSHA1(key, signatureBase);
       }
   }
   return hash;
}
exports.OAuth.prototype.NONCE_CHARS= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
              'o','p','q','r','s','t','u','v','w','x','y','z','A','B',
              'C','D','E','F','G','H','I','J','K','L','M','N','O','P',
              'Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3',
              '4','5','6','7','8','9'];

exports.OAuth.prototype._getNonce= function(nonceSize) {
   var result = [];
   var chars= this.NONCE_CHARS;
   var char_pos;
   var nonce_chars_length= chars.length;

   for (var i = 0; i < nonceSize; i++) {
       char_pos= Math.floor(Math.random() * nonce_chars_length);
       result[i]=  chars[char_pos];
   }
   return result.join('');
}

exports.OAuth.prototype._createClient= function( port, hostname, method, path, headers, sslEnabled ) {
  var options = {
    host: hostname,
    port: port,
    path: path,
    method: method,
    headers: headers
  };
  var httpModel;
  if( sslEnabled ) {
    httpModel= https;
  } else {
    httpModel= http;
  }
  return httpModel.request(options);
}

exports.OAuth.prototype._prepareParameters= function( oauth_token, oauth_token_secret, method, url, extra_params ) {
  var oauthParameters= {
      "oauth_timestamp":        this._getTimestamp(),
      "oauth_nonce":            this._getNonce(this._nonceSize),
      "oauth_version":          this._version,
      "oauth_signature_method": this._signatureMethod,
      "oauth_consumer_key":     this._consumerKey
  };

  if( oauth_token ) {
    oauthParameters["oauth_token"]= oauth_token;
  }

  var sig;
  if( this._isEcho ) {
    sig = this._getSignature( "GET",  this._verifyCredentials,  this._normaliseRequestParams(oauthParameters), oauth_token_secret);
  }
  else {
    if( extra_params ) {
      for( var key in extra_params ) {
        if (extra_params.hasOwnProperty(key)) oauthParameters[key]= extra_params[key];
      }
    }
    var parsedUrl= URL.parse( url, false );

    if( parsedUrl.query ) {
      var key2;
      var extraParameters= querystring.parse(parsedUrl.query);
      for(var key in extraParameters ) {
        var value= extraParameters[key];
          if( typeof value == "object" ){
            // TODO: This probably should be recursive
            for(key2 in value){
              oauthParameters[key + "[" + key2 + "]"] = value[key2];
            }
          } else {
            oauthParameters[key]= value;
          }
        }
    }

    sig = this._getSignature( method,  url,  this._normaliseRequestParams(oauthParameters), oauth_token_secret);
  }

  var orderedParameters= this._sortRequestParams( this._makeArrayOfArgumentsHash(oauthParameters) );
  orderedParameters[orderedParameters.length]= ["oauth_signature", sig];
  return orderedParameters;
}

exports.OAuth.prototype._performSecureRequest= function( oauth_token, oauth_token_secret, method, url, extra_params, post_body, post_content_type,  callback ) {
  var orderedParameters= this._prepareParameters(oauth_token, oauth_token_secret, method, url, extra_params);

  if( !post_content_type ) {
    post_content_type= "application/x-www-form-urlencoded";
  }
  var parsedUrl= URL.parse( url, false );
  if( parsedUrl.protocol == "http:" && !parsedUrl.port ) parsedUrl.port= 80;
  if( parsedUrl.protocol == "https:" && !parsedUrl.port ) parsedUrl.port= 443;

  var headers= {};
  var authorization = this._buildAuthorizationHeaders(orderedParameters);
  if ( this._isEcho ) {
    headers["X-Verify-Credentials-Authorization"]= authorization;
  }
  else {
    headers["Authorization"]= authorization;
  }

  headers["Host"] = parsedUrl.host

  for( var key in this._headers ) {
    if (this._headers.hasOwnProperty(key)) {
      headers[key]= this._headers[key];
    }
  }

  // Filter out any passed extra_params that are really to do with OAuth
  for(var key in extra_params) {
    if( this._isParameterNameAnOAuthParameter( key ) ) {
      delete extra_params[key];
    }
  }

  if( (method == "POST" || method == "PUT")  && ( post_body == null && extra_params != null) ) {
    // Fix the mismatch between the output of querystring.stringify() and this._encodeData()
    post_body= querystring.stringify(extra_params)
                       .replace(/\!/g, "%21")
                       .replace(/\'/g, "%27")
                       .replace(/\(/g, "%28")
                       .replace(/\)/g, "%29")
                       .replace(/\*/g, "%2A");
  }

  if( post_body ) {
      if ( Buffer.isBuffer(post_body) ) {
          headers["Content-length"]= post_body.length;
      } else {
          headers["Content-length"]= Buffer.byteLength(post_body);
      }
  } else {
      headers["Content-length"]= 0;
  }

  headers["Content-Type"]= post_content_type;

  var path;
  if( !parsedUrl.pathname  || parsedUrl.pathname == "" ) parsedUrl.pathname ="/";
  if( parsedUrl.query ) path= parsedUrl.pathname + "?"+ parsedUrl.query ;
  else path= parsedUrl.pathname;

  var request;
  if( parsedUrl.protocol == "https:" ) {
    request= this._createClient(parsedUrl.port, parsedUrl.hostname, method, path, headers, true);
  }
  else {
    request= this._createClient(parsedUrl.port, parsedUrl.hostname, method, path, headers);
  }

  var clientOptions = this._clientOptions;
  if( callback ) {
    var data="";
    var self= this;

    // Some hosts *cough* google appear to close the connection early / send no content-length header
    // allow this behaviour.
    var allowEarlyClose= OAuthUtils.isAnEarlyCloseHost( parsedUrl.hostname );
    var callbackCalled= false;
    var passBackControl = function( response ) {
      if(!callbackCalled) {
        callbackCalled= true;
        if ( response.statusCode >= 200 && response.statusCode <= 299 ) {
          callback(null, data, response);
        } else {
          // Follow 301 or 302 redirects with Location HTTP header
          if((response.statusCode == 301 || response.statusCode == 302) && clientOptions.followRedirects && response.headers && response.headers.location) {
            self._performSecureRequest( oauth_token, oauth_token_secret, method, response.headers.location, extra_params, post_body, post_content_type,  callback);
          }
          else {
            callback({ statusCode: response.statusCode, data: data }, data, response);
          }
        }
      }
    }

    request.on('response', function (response) {
      response.setEncoding('utf8');
      response.on('data', function (chunk) {
        data+=chunk;
      });
      response.on('end', function () {
        passBackControl( response );
      });
      response.on('close', function () {
        if( allowEarlyClose ) {
          passBackControl( response );
        }
      });
    });

    request.on("error", function(err) {
      if(!callbackCalled) {
        callbackCalled= true;
        callback( err )
      }
    });

    if( (method == "POST" || method =="PUT") && post_body != null && post_body != "" ) {
      request.write(post_body);
    }
    request.end();
  }
  else {
    if( (method == "POST" || method =="PUT") && post_body != null && post_body != "" ) {
      request.write(post_body);
    }
    return request;
  }

  return;
}

exports.OAuth.prototype.setClientOptions= function(options) {
  var key,
      mergedOptions= {},
      hasOwnProperty= Object.prototype.hasOwnProperty;

  for( key in this._defaultClientOptions ) {
    if( !hasOwnProperty.call(options, key) ) {
      mergedOptions[key]= this._defaultClientOptions[key];
    } else {
      mergedOptions[key]= options[key];
    }
  }

  this._clientOptions= mergedOptions;
};

exports.OAuth.prototype.getOAuthAccessToken= function(oauth_token, oauth_token_secret, oauth_verifier,  callback) {
  var extraParams= {};
  if( typeof oauth_verifier == "function" ) {
    callback= oauth_verifier;
  } else {
    extraParams.oauth_verifier= oauth_verifier;
  }

   this._performSecureRequest( oauth_token, oauth_token_secret, this._clientOptions.accessTokenHttpMethod, this._accessUrl, extraParams, null, null, function(error, data, response) {
         if( error ) callback(error);
         else {
           var results= querystring.parse( data );
           var oauth_access_token= results["oauth_token"];
           delete results["oauth_token"];
           var oauth_access_token_secret= results["oauth_token_secret"];
           delete results["oauth_token_secret"];
           callback(null, oauth_access_token, oauth_access_token_secret, results );
         }
   })
}

// Deprecated
exports.OAuth.prototype.getProtectedResource= function(url, method, oauth_token, oauth_token_secret, callback) {
  this._performSecureRequest( oauth_token, oauth_token_secret, method, url, null, "", null, callback );
}

exports.OAuth.prototype.delete= function(url, oauth_token, oauth_token_secret, callback) {
  return this._performSecureRequest( oauth_token, oauth_token_secret, "DELETE", url, null, "", null, callback );
}

exports.OAuth.prototype.get= function(url, oauth_token, oauth_token_secret, callback) {
  return this._performSecureRequest( oauth_token, oauth_token_secret, "GET", url, null, "", null, callback );
}

exports.OAuth.prototype._putOrPost= function(method, url, oauth_token, oauth_token_secret, post_body, post_content_type, callback) {
  var extra_params= null;
  if( typeof post_content_type == "function" ) {
    callback= post_content_type;
    post_content_type= null;
  }
  if ( typeof post_body != "string" && !Buffer.isBuffer(post_body) ) {
    post_content_type= "application/x-www-form-urlencoded"
    extra_params= post_body;
    post_body= null;
  }
  return this._performSecureRequest( oauth_token, oauth_token_secret, method, url, extra_params, post_body, post_content_type, callback );
}


exports.OAuth.prototype.put= function(url, oauth_token, oauth_token_secret, post_body, post_content_type, callback) {
  return this._putOrPost("PUT", url, oauth_token, oauth_token_secret, post_body, post_content_type, callback);
}

exports.OAuth.prototype.post= function(url, oauth_token, oauth_token_secret, post_body, post_content_type, callback) {
  return this._putOrPost("POST", url, oauth_token, oauth_token_secret, post_body, post_content_type, callback);
}

/**
 * Gets a request token from the OAuth provider and passes that information back
 * to the calling code.
 *
 * The callback should expect a function of the following form:
 *
 * function(err, token, token_secret, parsedQueryString) {}
 *
 * This method has optional parameters so can be called in the following 2 ways:
 *
 * 1) Primary use case: Does a basic request with no extra parameters
 *  getOAuthRequestToken( callbackFunction )
 *
 * 2) As above but allows for provision of extra parameters to be sent as part of the query to the server.
 *  getOAuthRequestToken( extraParams, callbackFunction )
 *
 * N.B. This method will HTTP POST verbs by default, if you wish to override this behaviour you will
 * need to provide a requestTokenHttpMethod option when creating the client.
 *
 **/
exports.OAuth.prototype.getOAuthRequestToken= function( extraParams, callback ) {
   if( typeof extraParams == "function" ){
     callback = extraParams;
     extraParams = {};
   }
  // Callbacks are 1.0A related
  if( this._authorize_callback ) {
    extraParams["oauth_callback"]= this._authorize_callback;
  }
  this._performSecureRequest( null, null, this._clientOptions.requestTokenHttpMethod, this._requestUrl, extraParams, null, null, function(error, data, response) {
    if( error ) callback(error);
    else {
      var results= querystring.parse(data);

      var oauth_token= results["oauth_token"];
      var oauth_token_secret= results["oauth_token_secret"];
      delete results["oauth_token"];
      delete results["oauth_token_secret"];
      callback(null, oauth_token, oauth_token_secret,  results );
    }
  });
}

exports.OAuth.prototype.signUrl= function(url, oauth_token, oauth_token_secret, method) {

  if( method === undefined ) {
    var method= "GET";
  }

  var orderedParameters= this._prepareParameters(oauth_token, oauth_token_secret, method, url, {});
  var parsedUrl= URL.parse( url, false );

  var query="";
  for( var i= 0 ; i < orderedParameters.length; i++) {
    query+= orderedParameters[i][0]+"="+ this._encodeData(orderedParameters[i][1]) + "&";
  }
  query= query.substring(0, query.length-1);

  return parsedUrl.protocol + "//"+ parsedUrl.host + parsedUrl.pathname + "?" + query;
};

exports.OAuth.prototype.authHeader= function(url, oauth_token, oauth_token_secret, method) {
  if( method === undefined ) {
    var method= "GET";
  }

  var orderedParameters= this._prepareParameters(oauth_token, oauth_token_secret, method, url, {});
  return this._buildAuthorizationHeaders(orderedParameters);
};


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// Returns true if this is a host that closes *before* it ends?!?!
module.exports.isAnEarlyCloseHost= function( hostName ) {
  return hostName && hostName.match(".*google(apis)?.com$")
}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

/**
 * `AuthorizationError` error.
 *
 * AuthorizationError represents an error in response to an authorization
 * request.  For details, refer to RFC 6749, section 4.1.2.1.
 *
 * References:
 *   - [The OAuth 2.0 Authorization Framework](http://tools.ietf.org/html/rfc6749)
 *
 * @constructor
 * @param {String} [message]
 * @param {String} [code]
 * @param {String} [uri]
 * @param {Number} [status]
 * @api public
 */
function AuthorizationError(message, code, uri, status) {
  if (!status) {
    switch (code) {
      case 'access_denied': status = 403; break;
      case 'server_error': status = 502; break;
      case 'temporarily_unavailable': status = 503; break;
    }
  }

  Error.call(this);
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
  this.code = code || 'server_error';
  this.uri = uri;
  this.status = status || 500;
}

/**
 * Inherit from `Error`.
 */
AuthorizationError.prototype.__proto__ = Error.prototype;


/**
 * Expose `AuthorizationError`.
 */
module.exports = AuthorizationError;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

/**
 * `TokenError` error.
 *
 * TokenError represents an error received from a token endpoint.  For details,
 * refer to RFC 6749, section 5.2.
 *
 * References:
 *   - [The OAuth 2.0 Authorization Framework](http://tools.ietf.org/html/rfc6749)
 *
 * @constructor
 * @param {String} [message]
 * @param {String} [code]
 * @param {String} [uri]
 * @param {Number} [status]
 * @api public
 */
function TokenError(message, code, uri, status) {
  Error.call(this);
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
  this.code = code || 'invalid_request';
  this.uri = uri;
  this.status = status || 500;
}

/**
 * Inherit from `Error`.
 */
TokenError.prototype.__proto__ = Error.prototype;


/**
 * Expose `TokenError`.
 */
module.exports = TokenError;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

/**
 * `InternalOAuthError` error.
 *
 * InternalOAuthError wraps errors generated by node-oauth.  By wrapping these
 * objects, error messages can be formatted in a manner that aids in debugging
 * OAuth issues.
 *
 * @constructor
 * @param {String} [message]
 * @param {Object|Error} [err]
 * @api public
 */
function InternalOAuthError(message, err) {
  Error.call(this);
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
  this.oauthError = err;
}

/**
 * Inherit from `Error`.
 */
InternalOAuthError.prototype.__proto__ = Error.prototype;

/**
 * Returns a string representing the error.
 *
 * @return {String}
 * @api public
 */
InternalOAuthError.prototype.toString = function() {
  var m = this.name;
  if (this.message) { m += ': ' + this.message; }
  if (this.oauthError) {
    if (this.oauthError instanceof Error) {
      m = this.oauthError.toString();
    } else if (this.oauthError.statusCode && this.oauthError.data) {
      m += ' (status: ' + this.oauthError.statusCode + ' data: ' + this.oauthError.data + ')';
    }
  }
  return m;
};


/**
 * Expose `InternalOAuthError`.
 */
module.exports = InternalOAuthError;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GoogleStrategy = __webpack_require__(86);
var User = __webpack_require__(23);
var keys = __webpack_require__(102);

var createUser = function createUser(_ref) {
    var password = _ref.password,
        email = _ref.email,
        username = _ref.username,
        googleId = _ref.googleId;

    var newUser = new User();

    newUser.local.password = newUser.generateHash(password);
    newUser.local.email = email;
    newUser.google.username = username;
    newUser.google.googleId = googleId;

    return newUser.save();
};

module.exports = new GoogleStrategy({
    clientSecret: keys.google.clientSecret,
    callbackURL: keys.google.callbackURL,
    clientID: keys.google.clientID
}, function (accessToken, refreshToken, profile, done) {
    User.findOne({ 'google.googleId': profile.id }).then(function (user) {
        if (user) {
            done(null, user);
        }

        createUser({ username: profile.displayName, googleId: profile.id }).then(function (newUser) {
            return done(null, newUser);
        }, function (err) {
            return done(err);
        });
    }, function (err) {
        return done(err);
    });
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// Load modules.
var Strategy = __webpack_require__(87);


// Expose Strategy.
exports = module.exports = Strategy;

// Exports.
exports.Strategy = Strategy;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Load modules.
var OAuth2Strategy = __webpack_require__(75)
  , util = __webpack_require__(76)
  , uri = __webpack_require__(73)
  , GooglePlusProfile = __webpack_require__(98)
  , OpenIDProfile = __webpack_require__(99)
  , InternalOAuthError = __webpack_require__(75).InternalOAuthError
  , GooglePlusAPIError = __webpack_require__(100)
  , UserInfoError = __webpack_require__(101);


/**
 * `Strategy` constructor.
 *
 * The Google authentication strategy authenticates requests by delegating to
 * Google using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `cb`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Google application's client id
 *   - `clientSecret`  your Google application's client secret
 *   - `callbackURL`   URL to which Google will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new GoogleStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/google/callback'
 *       },
 *       function(accessToken, refreshToken, profile, cb) {
 *         User.findOrCreate(..., function (err, user) {
 *           cb(err, user);
 *         });
 *       }
 *     ));
 *
 * @constructor
 * @param {object} options
 * @param {function} verify
 * @access public
 */
function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://accounts.google.com/o/oauth2/v2/auth';
  options.tokenURL = options.tokenURL || 'https://www.googleapis.com/oauth2/v4/token';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'google';
  this._userProfileURL = options.userProfileURL || 'https://www.googleapis.com/plus/v1/people/me';
  
  var url = uri.parse(this._userProfileURL);
  if (url.pathname.indexOf('/userinfo') == (url.pathname.length - '/userinfo'.length)) {
    this._userProfileFormat = 'openid';
  } else {
    this._userProfileFormat = 'google+'; // Google Sign-In
  }
}

// Inherit from `OAuth2Strategy`.
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from Google.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `google`
 *   - `id`
 *   - `username`
 *   - `displayName`
 *
 * @param {string} accessToken
 * @param {function} done
 * @access protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  var self = this;
  this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
    var json;
    
    if (err) {
      if (err.data) {
        try {
          json = JSON.parse(err.data);
        } catch (_) {}
      }
      
      if (json && json.error && json.error.message) {
        return done(new GooglePlusAPIError(json.error.message, json.error.code));
      } else if (json && json.error && json.error_description) {
        return done(new UserInfoError(json.error_description, json.error));
      }
      return done(new InternalOAuthError('Failed to fetch user profile', err));
    }
    
    try {
      json = JSON.parse(body);
    } catch (ex) {
      return done(new Error('Failed to parse user profile'));
    }
    
    var profile;
    switch (self._userProfileFormat) {
    case 'openid':
      profile = OpenIDProfile.parse(json);
      break;
    default: // Google Sign-In
      profile = GooglePlusProfile.parse(json);
      break;
    }
    
    profile.provider  = 'google';
    profile._raw = body;
    profile._json = json;
    
    done(null, profile);
  });
}

/**
 * Return extra Google-specific parameters to be included in the authorization
 * request.
 *
 * @param {object} options
 * @return {object}
 * @access protected
 */
Strategy.prototype.authorizationParams = function(options) {
  var params = {};
  
  // https://developers.google.com/identity/protocols/OAuth2WebServer
  if (options.accessType) {
    params['access_type'] = options.accessType;
  }
  if (options.prompt) {
    params['prompt'] = options.prompt;
  }
  if (options.loginHint) {
    params['login_hint'] = options.loginHint;
  }
  if (options.includeGrantedScopes) {
    params['include_granted_scopes'] = true;
  }
  
  // https://developers.google.com/identity/protocols/OpenIDConnect
  if (options.display) {
    // Specify what kind of display consent screen to display to users.
    //   https://developers.google.com/accounts/docs/OpenIDConnect#authenticationuriparameters
    params['display'] = options.display;
  }
  
  // Google Apps for Work
  if (options.hostedDomain || options.hd) {
    // This parameter is derived from Google's OAuth 1.0 endpoint, and (although
    // undocumented) is supported by Google's OAuth 2.0 endpoint was well.
    //   https://developers.google.com/accounts/docs/OAuth_ref
    params['hd'] = options.hostedDomain || options.hd;
  }
  
  // Google+
  if (options.requestVisibleActions) {
    // Space separated list of allowed app actions
    // as documented at:
    //  https://developers.google.com/+/web/app-activities/#writing_an_app_activity_using_the_google_apis_client_libraries
    //  https://developers.google.com/+/api/moment-types/
    params['request_visible_actions'] = options.requestVisibleActions;
  }
  
  // OpenID 2.0 migration
  if (options.openIDRealm) {
    // This parameter is needed when migrating users from Google's OpenID 2.0 to OAuth 2.0
    //   https://developers.google.com/accounts/docs/OpenID?hl=ja#adjust-uri
    params['openid.realm'] = options.openIDRealm;
  }
  
  // Undocumented
  if (options.approvalPrompt) {
    params['approval_prompt'] = options.approvalPrompt;
  }
  if (options.userID) {
    // Undocumented, but supported by Google's OAuth 2.0 endpoint.  Appears to
    // be equivalent to `login_hint`.
    params['user_id'] = options.userID;
  }
  
  return params;
}


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// Load modules.
var passport = __webpack_require__(89)
  , url = __webpack_require__(73)
  , util = __webpack_require__(76)
  , utils = __webpack_require__(90)
  , OAuth2 = __webpack_require__(92).OAuth2
  , NullStateStore = __webpack_require__(95)
  , SessionStateStore = __webpack_require__(96)
  , AuthorizationError = __webpack_require__(82)
  , TokenError = __webpack_require__(83)
  , InternalOAuthError = __webpack_require__(84);


/**
 * Creates an instance of `OAuth2Strategy`.
 *
 * The OAuth 2.0 authentication strategy authenticates requests using the OAuth
 * 2.0 framework.
 *
 * OAuth 2.0 provides a facility for delegated authentication, whereby users can
 * authenticate using a third-party service such as Facebook.  Delegating in
 * this manner involves a sequence of events, including redirecting the user to
 * the third-party service for authorization.  Once authorization has been
 * granted, the user is redirected back to the application and an authorization
 * code can be used to obtain credentials.
 *
 * Applications must supply a `verify` callback, for which the function
 * signature is:
 *
 *     function(accessToken, refreshToken, profile, done) { ... }
 *
 * The verify callback is responsible for finding or creating the user, and
 * invoking `done` with the following arguments:
 *
 *     done(err, user, info);
 *
 * `user` should be set to `false` to indicate an authentication failure.
 * Additional `info` can optionally be passed as a third argument, typically
 * used to display informational messages.  If an exception occured, `err`
 * should be set.
 *
 * Options:
 *
 *   - `authorizationURL`  URL used to obtain an authorization grant
 *   - `tokenURL`          URL used to obtain an access token
 *   - `clientID`          identifies client to service provider
 *   - `clientSecret`      secret used to establish ownership of the client identifer
 *   - `callbackURL`       URL to which the service provider will redirect the user after obtaining authorization
 *   - `passReqToCallback` when `true`, `req` is the first argument to the verify callback (default: `false`)
 *
 * Examples:
 *
 *     passport.use(new OAuth2Strategy({
 *         authorizationURL: 'https://www.example.com/oauth2/authorize',
 *         tokenURL: 'https://www.example.com/oauth2/token',
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/example/callback'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @constructor
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function OAuth2Strategy(options, verify) {
  if (typeof options == 'function') {
    verify = options;
    options = undefined;
  }
  options = options || {};

  if (!verify) { throw new TypeError('OAuth2Strategy requires a verify callback'); }
  if (!options.authorizationURL) { throw new TypeError('OAuth2Strategy requires a authorizationURL option'); }
  if (!options.tokenURL) { throw new TypeError('OAuth2Strategy requires a tokenURL option'); }
  if (!options.clientID) { throw new TypeError('OAuth2Strategy requires a clientID option'); }

  passport.Strategy.call(this);
  this.name = 'oauth2';
  this._verify = verify;

  // NOTE: The _oauth2 property is considered "protected".  Subclasses are
  //       allowed to use it when making protected resource requests to retrieve
  //       the user profile.
  this._oauth2 = new OAuth2(options.clientID,  options.clientSecret,
      '', options.authorizationURL, options.tokenURL, options.customHeaders);

  this._callbackURL = options.callbackURL;
  this._scope = options.scope;
  this._scopeSeparator = options.scopeSeparator || ' ';
  this._key = options.sessionKey || ('oauth2:' + url.parse(options.authorizationURL).hostname);

  if (options.store) {
    this._stateStore = options.store;
  } else {
    if (options.state) {
      this._stateStore = new SessionStateStore({ key: this._key });
    } else {
      this._stateStore = new NullStateStore();
    }
  }
  this._trustProxy = options.proxy;
  this._passReqToCallback = options.passReqToCallback;
  this._skipUserProfile = (options.skipUserProfile === undefined) ? false : options.skipUserProfile;
}

// Inherit from `passport.Strategy`.
util.inherits(OAuth2Strategy, passport.Strategy);


/**
 * Authenticate request by delegating to a service provider using OAuth 2.0.
 *
 * @param {Object} req
 * @api protected
 */
OAuth2Strategy.prototype.authenticate = function(req, options) {
  options = options || {};
  var self = this;

  if (req.query && req.query.error) {
    if (req.query.error == 'access_denied') {
      return this.fail({ message: req.query.error_description });
    } else {
      return this.error(new AuthorizationError(req.query.error_description, req.query.error, req.query.error_uri));
    }
  }

  var callbackURL = options.callbackURL || this._callbackURL;
  if (callbackURL) {
    var parsed = url.parse(callbackURL);
    if (!parsed.protocol) {
      // The callback URL is relative, resolve a fully qualified URL from the
      // URL of the originating request.
      callbackURL = url.resolve(utils.originalURL(req, { proxy: this._trustProxy }), callbackURL);
    }
  }
  
  var meta = {
    authorizationURL: this._oauth2._authorizeUrl,
    tokenURL: this._oauth2._accessTokenUrl,
    clientID: this._oauth2._clientId
  }

  if (req.query && req.query.code) {
    function loaded(err, ok, state) {
      if (err) { return self.error(err); }
      if (!ok) {
        return self.fail(state, 403);
      }
  
      var code = req.query.code;

      var params = self.tokenParams(options);
      params.grant_type = 'authorization_code';
      if (callbackURL) { params.redirect_uri = callbackURL; }

      self._oauth2.getOAuthAccessToken(code, params,
        function(err, accessToken, refreshToken, params) {
          if (err) { return self.error(self._createOAuthError('Failed to obtain access token', err)); }

          self._loadUserProfile(accessToken, function(err, profile) {
            if (err) { return self.error(err); }

            function verified(err, user, info) {
              if (err) { return self.error(err); }
              if (!user) { return self.fail(info); }
              
              info = info || {};
              if (state) { info.state = state; }
              self.success(user, info);
            }

            try {
              if (self._passReqToCallback) {
                var arity = self._verify.length;
                if (arity == 6) {
                  self._verify(req, accessToken, refreshToken, params, profile, verified);
                } else { // arity == 5
                  self._verify(req, accessToken, refreshToken, profile, verified);
                }
              } else {
                var arity = self._verify.length;
                if (arity == 5) {
                  self._verify(accessToken, refreshToken, params, profile, verified);
                } else { // arity == 4
                  self._verify(accessToken, refreshToken, profile, verified);
                }
              }
            } catch (ex) {
              return self.error(ex);
            }
          });
        }
      );
    }
    
    var state = req.query.state;
    try {
      var arity = this._stateStore.verify.length;
      if (arity == 4) {
        this._stateStore.verify(req, state, meta, loaded);
      } else { // arity == 3
        this._stateStore.verify(req, state, loaded);
      }
    } catch (ex) {
      return this.error(ex);
    }
  } else {
    var params = this.authorizationParams(options);
    params.response_type = 'code';
    if (callbackURL) { params.redirect_uri = callbackURL; }
    var scope = options.scope || this._scope;
    if (scope) {
      if (Array.isArray(scope)) { scope = scope.join(this._scopeSeparator); }
      params.scope = scope;
    }

    var state = options.state;
    if (state) {
      params.state = state;
      
      var parsed = url.parse(this._oauth2._authorizeUrl, true);
      utils.merge(parsed.query, params);
      parsed.query['client_id'] = this._oauth2._clientId;
      delete parsed.search;
      var location = url.format(parsed);
      this.redirect(location);
    } else {
      function stored(err, state) {
        if (err) { return self.error(err); }

        if (state) { params.state = state; }
        var parsed = url.parse(self._oauth2._authorizeUrl, true);
        utils.merge(parsed.query, params);
        parsed.query['client_id'] = self._oauth2._clientId;
        delete parsed.search;
        var location = url.format(parsed);
        self.redirect(location);
      }
      
      try {
        var arity = this._stateStore.store.length;
        if (arity == 3) {
          this._stateStore.store(req, meta, stored);
        } else { // arity == 2
          this._stateStore.store(req, stored);
        }
      } catch (ex) {
        return this.error(ex);
      }
    }
  }
};

/**
 * Retrieve user profile from service provider.
 *
 * OAuth 2.0-based authentication strategies can overrride this function in
 * order to load the user's profile from the service provider.  This assists
 * applications (and users of those applications) in the initial registration
 * process by automatically submitting required information.
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
OAuth2Strategy.prototype.userProfile = function(accessToken, done) {
  return done(null, {});
};

/**
 * Return extra parameters to be included in the authorization request.
 *
 * Some OAuth 2.0 providers allow additional, non-standard parameters to be
 * included when requesting authorization.  Since these parameters are not
 * standardized by the OAuth 2.0 specification, OAuth 2.0-based authentication
 * strategies can overrride this function in order to populate these parameters
 * as required by the provider.
 *
 * @param {Object} options
 * @return {Object}
 * @api protected
 */
OAuth2Strategy.prototype.authorizationParams = function(options) {
  return {};
};

/**
 * Return extra parameters to be included in the token request.
 *
 * Some OAuth 2.0 providers allow additional, non-standard parameters to be
 * included when requesting an access token.  Since these parameters are not
 * standardized by the OAuth 2.0 specification, OAuth 2.0-based authentication
 * strategies can overrride this function in order to populate these parameters
 * as required by the provider.
 *
 * @return {Object}
 * @api protected
 */
OAuth2Strategy.prototype.tokenParams = function(options) {
  return {};
};

/**
 * Parse error response from OAuth 2.0 endpoint.
 *
 * OAuth 2.0-based authentication strategies can overrride this function in
 * order to parse error responses received from the token endpoint, allowing the
 * most informative message to be displayed.
 *
 * If this function is not overridden, the body will be parsed in accordance
 * with RFC 6749, section 5.2.
 *
 * @param {String} body
 * @param {Number} status
 * @return {Error}
 * @api protected
 */
OAuth2Strategy.prototype.parseErrorResponse = function(body, status) {
  var json = JSON.parse(body);
  if (json.error) {
    return new TokenError(json.error_description, json.error, json.error_uri);
  }
  return null;
};

/**
 * Load user profile, contingent upon options.
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api private
 */
OAuth2Strategy.prototype._loadUserProfile = function(accessToken, done) {
  var self = this;

  function loadIt() {
    return self.userProfile(accessToken, done);
  }
  function skipIt() {
    return done(null);
  }

  if (typeof this._skipUserProfile == 'function' && this._skipUserProfile.length > 1) {
    // async
    this._skipUserProfile(accessToken, function(err, skip) {
      if (err) { return done(err); }
      if (!skip) { return loadIt(); }
      return skipIt();
    });
  } else {
    var skip = (typeof this._skipUserProfile == 'function') ? this._skipUserProfile() : this._skipUserProfile;
    if (!skip) { return loadIt(); }
    return skipIt();
  }
};

/**
 * Create an OAuth error.
 *
 * @param {String} message
 * @param {Object|Error} err
 * @api private
 */
OAuth2Strategy.prototype._createOAuthError = function(message, err) {
  var e;
  if (err.statusCode && err.data) {
    try {
      e = this.parseErrorResponse(err.data, err.statusCode);
    } catch (_) {}
  }
  if (!e) { e = new InternalOAuthError(message, err); }
  return e;
};


// Expose constructor.
module.exports = OAuth2Strategy;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("passport-strategy");

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports.merge = __webpack_require__(91);

/**
 * Reconstructs the original URL of the request.
 *
 * This function builds a URL that corresponds the original URL requested by the
 * client, including the protocol (http or https) and host.
 *
 * If the request passed through any proxies that terminate SSL, the
 * `X-Forwarded-Proto` header is used to detect if the request was encrypted to
 * the proxy, assuming that the proxy has been flagged as trusted.
 *
 * @param {http.IncomingMessage} req
 * @param {Object} [options]
 * @return {String}
 * @api private
 */
exports.originalURL = function(req, options) {
  options = options || {};
  var app = req.app;
  if (app && app.get && app.get('trust proxy')) {
    options.proxy = true;
  }
  var trustProxy = options.proxy;
  
  var proto = (req.headers['x-forwarded-proto'] || '').toLowerCase()
    , tls = req.connection.encrypted || (trustProxy && 'https' == proto.split(/\s*,\s*/)[0])
    , host = (trustProxy && req.headers['x-forwarded-host']) || req.headers.host
    , protocol = tls ? 'https' : 'http'
    , path = req.url || '';
  return protocol + '://' + host + path;
};


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("utils-merge");

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports.OAuth = __webpack_require__(77).OAuth;
exports.OAuthEcho = __webpack_require__(77).OAuthEcho;
exports.OAuth2 = __webpack_require__(94).OAuth2;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS 180-1
 * Version 2.2 Copyright Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 1;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = "="; /* base-64 pad character. "=" for strict RFC compliance   */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_sha1(s)    { return rstr2hex(rstr_sha1(str2rstr_utf8(s))); }
function b64_sha1(s)    { return rstr2b64(rstr_sha1(str2rstr_utf8(s))); }
function any_sha1(s, e) { return rstr2any(rstr_sha1(str2rstr_utf8(s)), e); }
function hex_hmac_sha1(k, d)
  { return rstr2hex(rstr_hmac_sha1(str2rstr_utf8(k), str2rstr_utf8(d))); }
function b64_hmac_sha1(k, d)
  { return rstr2b64(rstr_hmac_sha1(str2rstr_utf8(k), str2rstr_utf8(d))); }
function any_hmac_sha1(k, d, e)
  { return rstr2any(rstr_hmac_sha1(str2rstr_utf8(k), str2rstr_utf8(d)), e); }

/*
 * Perform a simple self-test to see if the VM is working
 */
function sha1_vm_test()
{
  return hex_sha1("abc").toLowerCase() == "a9993e364706816aba3e25717850c26c9cd0d89d";
}

/*
 * Calculate the SHA1 of a raw string
 */
function rstr_sha1(s)
{
  return binb2rstr(binb_sha1(rstr2binb(s), s.length * 8));
}

/*
 * Calculate the HMAC-SHA1 of a key and some data (raw strings)
 */
function rstr_hmac_sha1(key, data)
{
  var bkey = rstr2binb(key);
  if(bkey.length > 16) bkey = binb_sha1(bkey, key.length * 8);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = binb_sha1(ipad.concat(rstr2binb(data)), 512 + data.length * 8);
  return binb2rstr(binb_sha1(opad.concat(hash), 512 + 160));
}

/*
 * Convert a raw string to a hex string
 */
function rstr2hex(input)
{
  try { hexcase } catch(e) { hexcase=0; }
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var output = "";
  var x;
  for(var i = 0; i < input.length; i++)
  {
    x = input.charCodeAt(i);
    output += hex_tab.charAt((x >>> 4) & 0x0F)
           +  hex_tab.charAt( x        & 0x0F);
  }
  return output;
}

/*
 * Convert a raw string to a base-64 string
 */
function rstr2b64(input)
{
  try { b64pad } catch(e) { b64pad=''; }
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var output = "";
  var len = input.length;
  for(var i = 0; i < len; i += 3)
  {
    var triplet = (input.charCodeAt(i) << 16)
                | (i + 1 < len ? input.charCodeAt(i+1) << 8 : 0)
                | (i + 2 < len ? input.charCodeAt(i+2)      : 0);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > input.length * 8) output += b64pad;
      else output += tab.charAt((triplet >>> 6*(3-j)) & 0x3F);
    }
  }
  return output;
}

/*
 * Convert a raw string to an arbitrary string encoding
 */
function rstr2any(input, encoding)
{
  var divisor = encoding.length;
  var remainders = Array();
  var i, q, x, quotient;

  /* Convert to an array of 16-bit big-endian values, forming the dividend */
  var dividend = Array(Math.ceil(input.length / 2));
  for(i = 0; i < dividend.length; i++)
  {
    dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
  }

  /*
   * Repeatedly perform a long division. The binary array forms the dividend,
   * the length of the encoding is the divisor. Once computed, the quotient
   * forms the dividend for the next step. We stop when the dividend is zero.
   * All remainders are stored for later use.
   */
  while(dividend.length > 0)
  {
    quotient = Array();
    x = 0;
    for(i = 0; i < dividend.length; i++)
    {
      x = (x << 16) + dividend[i];
      q = Math.floor(x / divisor);
      x -= q * divisor;
      if(quotient.length > 0 || q > 0)
        quotient[quotient.length] = q;
    }
    remainders[remainders.length] = x;
    dividend = quotient;
  }

  /* Convert the remainders to the output string */
  var output = "";
  for(i = remainders.length - 1; i >= 0; i--)
    output += encoding.charAt(remainders[i]);

  /* Append leading zero equivalents */
  var full_length = Math.ceil(input.length * 8 /
                                    (Math.log(encoding.length) / Math.log(2)))
  for(i = output.length; i < full_length; i++)
    output = encoding[0] + output;

  return output;
}

/*
 * Encode a string as utf-8.
 * For efficiency, this assumes the input is valid utf-16.
 */
function str2rstr_utf8(input)
{
  var output = "";
  var i = -1;
  var x, y;

  while(++i < input.length)
  {
    /* Decode utf-16 surrogate pairs */
    x = input.charCodeAt(i);
    y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
    if(0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF)
    {
      x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
      i++;
    }

    /* Encode output as utf-8 */
    if(x <= 0x7F)
      output += String.fromCharCode(x);
    else if(x <= 0x7FF)
      output += String.fromCharCode(0xC0 | ((x >>> 6 ) & 0x1F),
                                    0x80 | ( x         & 0x3F));
    else if(x <= 0xFFFF)
      output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
                                    0x80 | ((x >>> 6 ) & 0x3F),
                                    0x80 | ( x         & 0x3F));
    else if(x <= 0x1FFFFF)
      output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
                                    0x80 | ((x >>> 12) & 0x3F),
                                    0x80 | ((x >>> 6 ) & 0x3F),
                                    0x80 | ( x         & 0x3F));
  }
  return output;
}

/*
 * Encode a string as utf-16
 */
function str2rstr_utf16le(input)
{
  var output = "";
  for(var i = 0; i < input.length; i++)
    output += String.fromCharCode( input.charCodeAt(i)        & 0xFF,
                                  (input.charCodeAt(i) >>> 8) & 0xFF);
  return output;
}

function str2rstr_utf16be(input)
{
  var output = "";
  for(var i = 0; i < input.length; i++)
    output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF,
                                   input.charCodeAt(i)        & 0xFF);
  return output;
}

/*
 * Convert a raw string to an array of big-endian words
 * Characters >255 have their high-byte silently ignored.
 */
function rstr2binb(input)
{
  var output = Array(input.length >> 2);
  for(var i = 0; i < output.length; i++)
    output[i] = 0;
  for(var i = 0; i < input.length * 8; i += 8)
    output[i>>5] |= (input.charCodeAt(i / 8) & 0xFF) << (24 - i % 32);
  return output;
}

/*
 * Convert an array of big-endian words to a string
 */
function binb2rstr(input)
{
  var output = "";
  for(var i = 0; i < input.length * 32; i += 8)
    output += String.fromCharCode((input[i>>5] >>> (24 - i % 32)) & 0xFF);
  return output;
}

/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */
function binb_sha1(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << (24 - len % 32);
  x[((len + 64 >> 9) << 4) + 15] = len;

  var w = Array(80);
  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;
  var e = -1009589776;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    var olde = e;

    for(var j = 0; j < 80; j++)
    {
      if(j < 16) w[j] = x[i + j];
      else w[j] = bit_rol(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1);
      var t = safe_add(safe_add(bit_rol(a, 5), sha1_ft(j, b, c, d)),
                       safe_add(safe_add(e, w[j]), sha1_kt(j)));
      e = d;
      d = c;
      c = bit_rol(b, 30);
      b = a;
      a = t;
    }

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
    e = safe_add(e, olde);
  }
  return Array(a, b, c, d, e);

}

/*
 * Perform the appropriate triplet combination function for the current
 * iteration
 */
function sha1_ft(t, b, c, d)
{
  if(t < 20) return (b & c) | ((~b) & d);
  if(t < 40) return b ^ c ^ d;
  if(t < 60) return (b & c) | (b & d) | (c & d);
  return b ^ c ^ d;
}

/*
 * Determine the appropriate additive constant for the current iteration
 */
function sha1_kt(t)
{
  return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
         (t < 60) ? -1894007588 : -899497514;
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

exports.HMACSHA1= function(key, data) {
  return b64_hmac_sha1(key, data);
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var querystring= __webpack_require__(80),
    crypto= __webpack_require__(74),
    https= __webpack_require__(79),
    http= __webpack_require__(78),
    URL= __webpack_require__(73),
    OAuthUtils= __webpack_require__(81);

exports.OAuth2= function(clientId, clientSecret, baseSite, authorizePath, accessTokenPath, customHeaders) {
  this._clientId= clientId;
  this._clientSecret= clientSecret;
  this._baseSite= baseSite;
  this._authorizeUrl= authorizePath || "/oauth/authorize";
  this._accessTokenUrl= accessTokenPath || "/oauth/access_token";
  this._accessTokenName= "access_token";
  this._authMethod= "Bearer";
  this._customHeaders = customHeaders || {};
  this._useAuthorizationHeaderForGET= false;

  //our agent
  this._agent = undefined;
};

// Allows you to set an agent to use instead of the default HTTP or
// HTTPS agents. Useful when dealing with your own certificates.
exports.OAuth2.prototype.setAgent = function(agent) {
  this._agent = agent;
};

// This 'hack' method is required for sites that don't use
// 'access_token' as the name of the access token (for requests).
// ( http://tools.ietf.org/html/draft-ietf-oauth-v2-16#section-7 )
// it isn't clear what the correct value should be atm, so allowing
// for specific (temporary?) override for now.
exports.OAuth2.prototype.setAccessTokenName= function ( name ) {
  this._accessTokenName= name;
}

// Sets the authorization method for Authorization header.
// e.g. Authorization: Bearer <token>  # "Bearer" is the authorization method.
exports.OAuth2.prototype.setAuthMethod = function ( authMethod ) {
  this._authMethod = authMethod;
};


// If you use the OAuth2 exposed 'get' method (and don't construct your own _request call )
// this will specify whether to use an 'Authorize' header instead of passing the access_token as a query parameter
exports.OAuth2.prototype.useAuthorizationHeaderforGET = function(useIt) {
  this._useAuthorizationHeaderForGET= useIt;
}

exports.OAuth2.prototype._getAccessTokenUrl= function() {
  return this._baseSite + this._accessTokenUrl; /* + "?" + querystring.stringify(params); */
}

// Build the authorization header. In particular, build the part after the colon.
// e.g. Authorization: Bearer <token>  # Build "Bearer <token>"
exports.OAuth2.prototype.buildAuthHeader= function(token) {
  return this._authMethod + ' ' + token;
};

exports.OAuth2.prototype._chooseHttpLibrary= function( parsedUrl ) {
  var http_library= https;
  // As this is OAUth2, we *assume* https unless told explicitly otherwise.
  if( parsedUrl.protocol != "https:" ) {
    http_library= http;
  }
  return http_library;
};

exports.OAuth2.prototype._request= function(method, url, headers, post_body, access_token, callback) {

  var parsedUrl= URL.parse( url, true );
  if( parsedUrl.protocol == "https:" && !parsedUrl.port ) {
    parsedUrl.port= 443;
  }

  var http_library= this._chooseHttpLibrary( parsedUrl );


  var realHeaders= {};
  for( var key in this._customHeaders ) {
    realHeaders[key]= this._customHeaders[key];
  }
  if( headers ) {
    for(var key in headers) {
      realHeaders[key] = headers[key];
    }
  }
  realHeaders['Host']= parsedUrl.host;

  if (!realHeaders['User-Agent']) {
    realHeaders['User-Agent'] = 'Node-oauth';
  }

  if( post_body ) {
      if ( Buffer.isBuffer(post_body) ) {
          realHeaders["Content-Length"]= post_body.length;
      } else {
          realHeaders["Content-Length"]= Buffer.byteLength(post_body);
      }
  } else {
      realHeaders["Content-length"]= 0;
  }

  if( access_token && !('Authorization' in realHeaders)) {
    if( ! parsedUrl.query ) parsedUrl.query= {};
    parsedUrl.query[this._accessTokenName]= access_token;
  }

  var queryStr= querystring.stringify(parsedUrl.query);
  if( queryStr ) queryStr=  "?" + queryStr;
  var options = {
    host:parsedUrl.hostname,
    port: parsedUrl.port,
    path: parsedUrl.pathname + queryStr,
    method: method,
    headers: realHeaders
  };

  this._executeRequest( http_library, options, post_body, callback );
}

exports.OAuth2.prototype._executeRequest= function( http_library, options, post_body, callback ) {
  // Some hosts *cough* google appear to close the connection early / send no content-length header
  // allow this behaviour.
  var allowEarlyClose= OAuthUtils.isAnEarlyCloseHost(options.host);
  var callbackCalled= false;
  function passBackControl( response, result ) {
    if(!callbackCalled) {
      callbackCalled=true;
      if( !(response.statusCode >= 200 && response.statusCode <= 299) && (response.statusCode != 301) && (response.statusCode != 302) ) {
        callback({ statusCode: response.statusCode, data: result });
      } else {
        callback(null, result, response);
      }
    }
  }

  var result= "";

  //set the agent on the request options
  if (this._agent) {
    options.agent = this._agent;
  }

  var request = http_library.request(options);
  request.on('response', function (response) {
    response.on("data", function (chunk) {
      result+= chunk
    });
    response.on("close", function (err) {
      if( allowEarlyClose ) {
        passBackControl( response, result );
      }
    });
    response.addListener("end", function () {
      passBackControl( response, result );
    });
  });
  request.on('error', function(e) {
    callbackCalled= true;
    callback(e);
  });

  if( (options.method == 'POST' || options.method == 'PUT') && post_body ) {
     request.write(post_body);
  }
  request.end();
}

exports.OAuth2.prototype.getAuthorizeUrl= function( params ) {
  var params= params || {};
  params['client_id'] = this._clientId;
  return this._baseSite + this._authorizeUrl + "?" + querystring.stringify(params);
}

exports.OAuth2.prototype.getOAuthAccessToken= function(code, params, callback) {
  var params= params || {};
  params['client_id'] = this._clientId;
  params['client_secret'] = this._clientSecret;
  var codeParam = (params.grant_type === 'refresh_token') ? 'refresh_token' : 'code';
  params[codeParam]= code;

  var post_data= querystring.stringify( params );
  var post_headers= {
       'Content-Type': 'application/x-www-form-urlencoded'
   };


  this._request("POST", this._getAccessTokenUrl(), post_headers, post_data, null, function(error, data, response) {
    if( error )  callback(error);
    else {
      var results;
      try {
        // As of http://tools.ietf.org/html/draft-ietf-oauth-v2-07
        // responses should be in JSON
        results= JSON.parse( data );
      }
      catch(e) {
        // .... However both Facebook + Github currently use rev05 of the spec
        // and neither seem to specify a content-type correctly in their response headers :(
        // clients of these services will suffer a *minor* performance cost of the exception
        // being thrown
        results= querystring.parse( data );
      }
      var access_token= results["access_token"];
      var refresh_token= results["refresh_token"];
      delete results["refresh_token"];
      callback(null, access_token, refresh_token, results); // callback results =-=
    }
  });
}

// Deprecated
exports.OAuth2.prototype.getProtectedResource= function(url, access_token, callback) {
  this._request("GET", url, {}, "", access_token, callback );
}

exports.OAuth2.prototype.get= function(url, access_token, callback) {
  if( this._useAuthorizationHeaderForGET ) {
    var headers= {'Authorization': this.buildAuthHeader(access_token) }
    access_token= null;
  }
  else {
    headers= {};
  }
  this._request("GET", url, headers, "", access_token, callback );
}


/***/ }),
/* 95 */
/***/ (function(module, exports) {

function NullStore(options) {
}

NullStore.prototype.store = function(req, cb) {
  cb();
}

NullStore.prototype.verify = function(req, providedState, cb) {
  cb(null, true);
}


module.exports = NullStore;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var uid = __webpack_require__(97);

/**
 * Creates an instance of `SessionStore`.
 *
 * This is the state store implementation for the OAuth2Strategy used when
 * the `state` option is enabled.  It generates a random state and stores it in
 * `req.session` and verifies it when the service provider redirects the user
 * back to the application.
 *
 * This state store requires session support.  If no session exists, an error
 * will be thrown.
 *
 * Options:
 *
 *   - `key`  The key in the session under which to store the state
 *
 * @constructor
 * @param {Object} options
 * @api public
 */
function SessionStore(options) {
  if (!options.key) { throw new TypeError('Session-based state store requires a session key'); }
  this._key = options.key;
}

/**
 * Store request state.
 *
 * This implementation simply generates a random string and stores the value in
 * the session, where it will be used for verification when the user is
 * redirected back to the application.
 *
 * @param {Object} req
 * @param {Function} callback
 * @api protected
 */
SessionStore.prototype.store = function(req, callback) {
  if (!req.session) { return callback(new Error('OAuth 2.0 authentication requires session support when using state. Did you forget to use express-session middleware?')); }

  var key = this._key;
  var state = uid(24);
  if (!req.session[key]) { req.session[key] = {}; }
  req.session[key].state = state;
  callback(null, state);
};

/**
 * Verify request state.
 *
 * This implementation simply compares the state parameter in the request to the
 * value generated earlier and stored in the session.
 *
 * @param {Object} req
 * @param {String} providedState
 * @param {Function} callback
 * @api protected
 */
SessionStore.prototype.verify = function(req, providedState, callback) {
  if (!req.session) { return callback(new Error('OAuth 2.0 authentication requires session support when using state. Did you forget to use express-session middleware?')); }

  var key = this._key;
  if (!req.session[key]) {
   return callback(null, false, { message: 'Unable to verify authorization request state.' });
  }

  var state = req.session[key].state;
  if (!state) {
   return callback(null, false, { message: 'Unable to verify authorization request state.' });
  }

  delete req.session[key].state;
  if (Object.keys(req.session[key]).length === 0) {
   delete req.session[key];
  }

  if (state !== providedState) {
   return callback(null, false, { message: 'Invalid authorization request state.' });
  }

  return callback(null, true);
};

// Expose constructor.
module.exports = SessionStore;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var crypto = __webpack_require__(74);

/**
 * 62 characters in the ascii range that can be used in URLs without special
 * encoding.
 */
var UIDCHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * Make a Buffer into a string ready for use in URLs
 *
 * @param {String}
 * @returns {String}
 * @api private
 */
function tostr(bytes) {
  var chars, r, i;

  r = [];
  for (i = 0; i < bytes.length; i++) {
    r.push(UIDCHARS[bytes[i] % UIDCHARS.length]);
  }

  return r.join('');
}

/**
 * Generate an Unique Id
 *
 * @param {Number} length  The number of chars of the uid
 * @param {Number} cb (optional)  Callback for async uid generation
 * @api public
 */

function uid(length, cb) {

  if (typeof cb === 'undefined') {
    return tostr(crypto.pseudoRandomBytes(length));
  } else {
    crypto.pseudoRandomBytes(length, function(err, bytes) {
       if (err) return cb(err);
       cb(null, tostr(bytes));
    })
  }
}

/**
 * Exports
 */

module.exports = uid;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/**
 * Parse profile.
 *
 * Parses user profiles as fetched from Google's Google+ API.
 *
 * The amount of detail in the profile varies based on the scopes granted by the
 * user.  The following scope values add additional data:
 *
 *     `https://www.googleapis.com/auth/plus.login` - recommended login scope
 *     `profile` - basic profile information
 *     `email` - email address
 *
 * References:
 *   - https://developers.google.com/+/web/api/rest/latest/people/get
 *   - https://developers.google.com/+/web/api/rest/
 *   - https://developers.google.com/+/web/api/rest/oauth
 *
 * @param {object|string} json
 * @return {object}
 * @access public
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }
  
  var profile = {}
    , i, len;
  profile.id = json.id;
  profile.displayName = json.displayName;
  if (json.name) {
    profile.name = { familyName: json.name.familyName,
                     givenName: json.name.givenName };
  }
  if (json.emails) {
    profile.emails = [];
    for (i = 0, len = json.emails.length; i < len; ++i) {
      profile.emails.push({ value: json.emails[i].value, type: json.emails[i].type })
    }
  }
  if (json.image) {
    profile.photos = [{ value: json.image.url }];
  }
  profile.gender = json.gender;
  
  return profile;
};


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * Parse profile.
 *
 * Parses user profiles as fetched from Google's OpenID Connect-compatible user
 * info endpoint.
 *
 * The amount of detail in the profile varies based on the scopes granted by the
 * user.  The following scope values add additional data:
 *
 *     `profile` - basic profile information
 *     `email` - email address
 *
 * References:
 *   - https://developers.google.com/identity/protocols/OpenIDConnect
 *
 * @param {object|string} json
 * @return {object}
 * @access public
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }
  
  var profile = {};
  profile.id = json.sub;
  profile.displayName = json.name;
  if (json.family_name || json.given_name) {
    profile.name = { familyName: json.family_name,
                     givenName: json.given_name };
  }
  if (json.email) {
    profile.emails = [ { value: json.email, verified: json.email_verified } ];
  }
  if (json.picture) {
    profile.photos = [{ value: json.picture }];
  }
  
  return profile;
};


/***/ }),
/* 100 */
/***/ (function(module, exports) {

/**
 * `GooglePlusAPIError` error.
 *
 * References:
 *   - https://developers.google.com/+/web/api/rest/
 *
 * @constructor
 * @param {string} [message]
 * @param {number} [code]
 * @access public
 */
function GooglePlusAPIError(message, code) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'GooglePlusAPIError';
  this.message = message;
  this.code = code;
}

// Inherit from `Error`.
GooglePlusAPIError.prototype.__proto__ = Error.prototype;


// Expose constructor.
module.exports = GooglePlusAPIError;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

/**
 * `UserInfoError` error.
 *
 * @constructor
 * @param {string} [message]
 * @param {string} [code]
 * @access public
 */
function UserInfoError(message, code) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'UserInfoError';
  this.message = message;
  this.code = code;
}

// Inherit from `Error`.
UserInfoError.prototype.__proto__ = Error.prototype;


// Expose constructor.
module.exports = UserInfoError;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    google: {
        clientID: "814897073523-f5bfki1hqe11lkj0r6bc84javmko01pl.apps.googleusercontent.com",
        clientSecret: "Rzg7QujJIZ9jndJKtm_MM0op",
        callbackURL: "/auth/google/redirect"
    },
    session: {
        cookieKey: "thisissomeprivatecookiekey"
    }
};

/***/ })
/******/ ]);