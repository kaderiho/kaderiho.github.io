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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(6);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(7);

var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

var _app = __webpack_require__(10);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import indexTemplate from './templates/index'
//
// const port = 3000;
// const app = express();
//
// app.use(express.static('dist'));
//
// app.get('/', (req, res) => {
//     const appTemplate = renderToString(<BlogApp/>);
//     const outputTemplate = indexTemplate(appTemplate);
//
//     res.send(outputTemplate);
// });
//
// app.listen(3000, () => {
//     console.log('Server is running on: 3000 port')
// });

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.static('dist'));

app.get('*', function (req, res) {
    var name = 'Tyler';
    var markup = (0, _server.renderToString)(_react2.default.createElement(_app2.default, { data: name }));

    res.send((0, _index2.default)(markup, name));
});

app.listen(3000, function () {
    console.log('Server is running on: 3000 port');
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _serializeJavascript = __webpack_require__(9);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (appComponent, data) {
    return '<!doctype html>\n            <html lang="en">\n            <head>\n                <meta charset="UTF-8">\n                <meta name="viewport"\n                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n                <meta http-equiv="X-UA-Compatible" content="ie=edge">\n                <title>Basic ReactJS application</title>\n                <script src=\'/client/index.bundle.js\' defer></script>\n                <script>window.__INITIAL_DATA__ = ' + (0, _serializeJavascript2.default)(data) + '</script>\n            </head>\n            \n            <body>\n                <h1>Hey!</h1>\n                <div id="app">' + appComponent + '</div>\n            </body>\n        </html>';
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _blogsFilter = __webpack_require__(11);

var _blogsFilter2 = _interopRequireDefault(_blogsFilter);

var _blogAdding = __webpack_require__(13);

var _blogAdding2 = _interopRequireDefault(_blogAdding);

var _blogsList = __webpack_require__(14);

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
                this.props.data,
                _react2.default.createElement(_blogAdding2.default, null),
                _react2.default.createElement(_blogsList2.default, null),
                _react2.default.createElement(_blogsFilter2.default, null)
            );
        }
    }]);

    return BlogApp;
}(_react2.default.Component);

exports.default = BlogApp;

/***/ }),
/* 11 */
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

var _filter = __webpack_require__(12);

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
/* 12 */
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

var _reactRedux = __webpack_require__(2);

var _blogs = __webpack_require__(3);

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

// export default connect(null, matchDispatchToProps)(BlogAdding);
exports.default = BlogAdding;

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

var _reactRedux = __webpack_require__(2);

var _blogItem = __webpack_require__(15);

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
            return _react2.default.createElement('div', { className: 'blogsList' });
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

// export default connect(mapStateToProps)(BlogsList);
exports.default = BlogsList;

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

var _blogs = __webpack_require__(3);

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

// export default connect(null, matchDispatchToProps)(BlogItem);
exports.default = BlogItem;

/***/ })
/******/ ]);