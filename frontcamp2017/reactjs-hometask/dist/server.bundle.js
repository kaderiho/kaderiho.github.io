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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _home = __webpack_require__(13);

var _home2 = _interopRequireDefault(_home);

var _blogs = __webpack_require__(14);

var _blogs2 = _interopRequireDefault(_blogs);

var _api = __webpack_require__(20);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    path: '/',
    exact: true,
    component: _home2.default
}, {
    path: '/blogs',
    component: _blogs2.default,
    fetchInitialData: function fetchInitialData() {
        return (0, _api2.default)();
    }
}];

exports.default = routes;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(8);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(9);

var _indexTemplate = __webpack_require__(10);

var _indexTemplate2 = _interopRequireDefault(_indexTemplate);

var _app = __webpack_require__(12);

var _app2 = _interopRequireDefault(_app);

var _reactRouterDom = __webpack_require__(3);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.static('dist'));

app.get('*', function (req, res) {
    var activeRoutes = _routes2.default.find(function (route) {
        return (0, _reactRouterDom.matchPath)(req.url, route);
    }) || {};
    var promise = activeRoutes.fetchInitialData ? activeRoutes.fetchInitialData() : Promise.resolve();

    promise.then(function (data) {
        var context = { data: data };
        var markup = (0, _server.renderToString)(
        // context - is an object for passing data to the certain component
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: context },
            _react2.default.createElement(_app2.default, null)
        ));

        res.send((0, _indexTemplate2.default)(markup, data));
    });
});

app.listen(3000, function () {
    console.log('Server is running on: 3000 port');
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _serializeJavascript = __webpack_require__(11);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (appComponent) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    return '<!doctype html>\n            <html lang="en">\n            <head>\n                <meta charset="UTF-8">\n                <meta name="viewport"\n                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n                <meta http-equiv="X-UA-Compatible" content="ie=edge">\n                <title>Basic ReactJS application</title>\n                \n                <script>window.__INITIAL_DATA__ = ' + (0, _serializeJavascript2.default)(data) + '</script>\n            </head>\n            \n            <body>\n                <div id="app">' + appComponent + '</div>\n            </body>\n        </html>';
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(3);

var _NoMatch = __webpack_require__(22);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _navbar = __webpack_require__(23);

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_navbar2.default, null),
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _routes2.default.map(function (_ref) {
                        var path = _ref.path,
                            exact = _ref.exact,
                            C = _ref.component,
                            rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);

                        return _react2.default.createElement(_reactRouterDom.Route, {
                            key: path,
                            path: path,
                            exact: exact,
                            render: function render(props) {
                                return _react2.default.createElement(C, _extends({}, props, rest));
                            }
                        });
                    }),
                    _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
                            return _react2.default.createElement(_NoMatch2.default, props);
                        } })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 13 */
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

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Its a home page!'
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _blogsFilter = __webpack_require__(15);

var _blogsFilter2 = _interopRequireDefault(_blogsFilter);

var _blogAdding = __webpack_require__(17);

var _blogAdding2 = _interopRequireDefault(_blogAdding);

var _blogsList = __webpack_require__(18);

var _blogsList2 = _interopRequireDefault(_blogsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogApp = function (_React$Component) {
    _inherits(BlogApp, _React$Component);

    function BlogApp(props) {
        _classCallCheck(this, BlogApp);

        return _possibleConstructorReturn(this, (BlogApp.__proto__ || Object.getPrototypeOf(BlogApp)).call(this, props));
    }

    _createClass(BlogApp, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_blogAdding2.default, null),
                _react2.default.createElement(_blogsList2.default, { data: this.props.staticContext.data }),
                _react2.default.createElement(_blogsFilter2.default, null)
            );
        }
    }]);

    return BlogApp;
}(_react2.default.Component);

exports.default = BlogApp;

/***/ }),
/* 15 */
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

var _filter = __webpack_require__(16);

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

// export default connect(null, mapDispatchToProps)(BlogsFilter);
exports.default = BlogsFilter;

/***/ }),
/* 16 */
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
/* 17 */
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

var _blogs = __webpack_require__(5);

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

// function matchDispatchToProps(dispatch) {
//     return {
//         onSubmit: (blog) => {
//             dispatch(addBlog(blog))
//         }
//     }
// }

// export default connect(null, matchDispatchToProps)(BlogAdding);


exports.default = BlogAdding;

/***/ }),
/* 18 */
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

var _blogItem = __webpack_require__(19);

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
            var blogs = this.props.data;

            return _react2.default.createElement(
                'div',
                { className: 'blogsList' },
                blogs.map(function (blogItem) {
                    return _react2.default.createElement(_blogItem2.default, { key: blogItem.id, blog: blogItem });
                })
            );
        }
    }]);

    return BlogsList;
}(_react2.default.Component);

// const mapStateToProps = (state) => {
//     return {
//         blogs: state.visibilityFilter ? state.blogs.filter((blog) => blog.text.indexOf(state.visibilityFilter) !== -1) : state.blogs
//     }
// };

// export default connect(mapStateToProps)(BlogsList);


exports.default = BlogsList;

/***/ }),
/* 19 */
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

var _blogs = __webpack_require__(5);

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
                    blogDate ? blogDate.toLocaleTimeString() : ''
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

// export default connect(null, matchDispatchToProps)(BlogItem);
exports.default = BlogItem;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fetchBlogs;

var _isomorphicFetch = __webpack_require__(21);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchBlogs() {
    return (0, _isomorphicFetch2.default)('https://my-json-server.typicode.com/typicode/demo/comments').then(function (data) {
        return data.json();
    }).catch(function (err) {
        return null;
    });
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = NoMatch;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NoMatch() {
    return _react2.default.createElement(
        'div',
        null,
        '404 Not found'
    );
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar() {
        _classCallCheck(this, NavBar);

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    _createClass(NavBar, [{
        key: 'render',
        value: function render() {
            var items = [{
                name: 'Home',
                param: '/'
            }, {
                name: 'Blogs',
                param: '/blogs'
            }];

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'ul',
                    null,
                    items.map(function (_ref) {
                        var name = _ref.name,
                            param = _ref.param;
                        return _react2.default.createElement(
                            _reactRouterDom.NavLink,
                            { to: '' + param, key: name },
                            name
                        );
                    })
                )
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

exports.default = NavBar;

/***/ })
/******/ ]);