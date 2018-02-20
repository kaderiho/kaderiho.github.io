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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _blogsFilter = __webpack_require__(3);

var _blogsFilter2 = _interopRequireDefault(_blogsFilter);

var _blogAdding = __webpack_require__(4);

var _blogAdding2 = _interopRequireDefault(_blogAdding);

var _blogsList = __webpack_require__(5);

var _blogsList2 = _interopRequireDefault(_blogsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogApp = function (_React$Component) {
    _inherits(BlogApp, _React$Component);

    function BlogApp(props) {
        _classCallCheck(this, BlogApp);

        var _this = _possibleConstructorReturn(this, (BlogApp.__proto__ || Object.getPrototypeOf(BlogApp)).call(this, props));

        _this.state = {
            inputPostMessage: '',
            inputPostAuthor: '',
            filterText: '',
            blogsList: []
        };

        _this.inputMessageAuthorHandler = _this.inputMessageAuthorHandler.bind(_this);
        _this.removeBlogItemHandler = _this.removeBlogItemHandler.bind(_this);
        _this.submitMessageHandler = _this.submitMessageHandler.bind(_this);
        _this.inputMessageHandler = _this.inputMessageHandler.bind(_this);
        _this.filterHandler = _this.filterHandler.bind(_this);
        return _this;
    }

    _createClass(BlogApp, [{
        key: 'inputMessageHandler',
        value: function inputMessageHandler(inputPostMessage) {
            this.setState({
                inputPostMessage: inputPostMessage
            });
        }
    }, {
        key: 'inputMessageAuthorHandler',
        value: function inputMessageAuthorHandler(inputPostAuthor) {
            this.setState({
                inputPostAuthor: inputPostAuthor
            });
        }
    }, {
        key: 'filterHandler',
        value: function filterHandler(filterText) {
            this.setState({
                filterText: filterText
            });
        }
    }, {
        key: 'submitMessageHandler',
        value: function submitMessageHandler() {
            var _this2 = this;

            this.setState(function (prevState) {
                return {
                    blogsList: prevState.blogsList.concat([{
                        text: _this2.state.inputPostMessage,
                        id: _this2.state.blogsList.length + 1,
                        author: _this2.state.inputPostAuthor,
                        date: new Date()
                    }]),
                    inputPostMessage: '',
                    inputPostAuthor: ''
                };
            });
        }
    }, {
        key: 'removeBlogItemHandler',
        value: function removeBlogItemHandler(removedItemId) {
            this.setState(function (prevState) {
                return {
                    blogsList: prevState.blogsList.filter(function (blogItem) {
                        return blogItem.id !== removedItemId;
                    })
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var filteredBlogList = void 0;

            if (!this.state.filterText.length) {
                filteredBlogList = this.state.blogsList;
            } else {
                filteredBlogList = this.state.blogsList.filter(function (blogItem) {
                    return blogItem.author.indexOf(_this3.state.filterText) !== -1;
                });
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_blogAdding2.default, { inputMessageAuthorHandler: this.inputMessageAuthorHandler,
                    submitMessageHandler: this.submitMessageHandler,
                    inputPostMessage: this.state.inputPostMessage,
                    inputMessageHandler: this.inputMessageHandler,
                    inputPostAuthor: this.state.inputPostAuthor }),
                _react2.default.createElement(_blogsList2.default, { removeBlogItemHandler: this.removeBlogItemHandler,
                    blogList: filteredBlogList }),
                _react2.default.createElement(_blogsFilter2.default, { filterText: this.state.filterText, filterHandler: this.filterHandler })
            );
        }
    }]);

    return BlogApp;
}(_react2.default.Component);

exports.default = BlogApp;

{/*render(<BlogApp/>, document.getElementById('app'));*/}

/***/ }),
/* 3 */
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

var BlogsFilter = function (_React$Component) {
    _inherits(BlogsFilter, _React$Component);

    function BlogsFilter(props) {
        _classCallCheck(this, BlogsFilter);

        var _this = _possibleConstructorReturn(this, (BlogsFilter.__proto__ || Object.getPrototypeOf(BlogsFilter)).call(this, props));

        _this.filterHandler = _this.filterHandler.bind(_this);
        return _this;
    }

    _createClass(BlogsFilter, [{
        key: 'filterHandler',
        value: function filterHandler(event) {
            this.props.filterHandler(event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var filterText = this.props.filterText;

            return _react2.default.createElement('input', { type: 'text', value: filterText, placeholder: 'Filter by author name', onChange: this.filterHandler });
        }
    }]);

    return BlogsFilter;
}(_react2.default.Component);

exports.default = BlogsFilter;

/***/ }),
/* 4 */
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

var BlogAdding = function (_React$Component) {
    _inherits(BlogAdding, _React$Component);

    function BlogAdding(props) {
        _classCallCheck(this, BlogAdding);

        var _this = _possibleConstructorReturn(this, (BlogAdding.__proto__ || Object.getPrototypeOf(BlogAdding)).call(this, props));

        _this.inputMessageHandler = _this.inputMessageHandler.bind(_this);
        _this.submitMessageHandler = _this.submitMessageHandler.bind(_this);
        _this.inputMessageAuthorHandler = _this.inputMessageAuthorHandler.bind(_this);

        _this.state = {
            isSubmitButtonEnabled: false
        };
        return _this;
    }

    _createClass(BlogAdding, [{
        key: 'inputMessageHandler',
        value: function inputMessageHandler(event) {
            this.props.inputMessageHandler(event.target.value);
        }
    }, {
        key: 'inputMessageAuthorHandler',
        value: function inputMessageAuthorHandler(event) {
            this.props.inputMessageAuthorHandler(event.target.value);
        }
    }, {
        key: 'submitMessageHandler',
        value: function submitMessageHandler(event) {
            this.props.submitMessageHandler();
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var inputPostMessage = this.props.inputPostMessage;
            var inputPostAuthor = this.props.inputPostAuthor;

            return _react2.default.createElement(
                'form',
                { onSubmit: this.submitMessageHandler },
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'label',
                        null,
                        'Put your message there: ',
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('input', { type: 'text', value: inputPostMessage, onChange: this.inputMessageHandler, placeholder: 'Your message' })
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
                        _react2.default.createElement('input', { type: 'text', value: inputPostAuthor, onChange: this.inputMessageAuthorHandler, placeholder: 'Author nickname' })
                    )
                ),
                _react2.default.createElement(
                    'button',
                    { type: 'submit', value: 'Submit', disabled: !this.props.inputPostMessage.length || !this.props.inputPostAuthor.length },
                    'Add'
                )
            );
        }
    }]);

    return BlogAdding;
}(_react2.default.Component);

exports.default = BlogAdding;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _blogItem = __webpack_require__(6);

var _blogItem2 = _interopRequireDefault(_blogItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogsList = function (_React$Component) {
    _inherits(BlogsList, _React$Component);

    function BlogsList(props) {
        _classCallCheck(this, BlogsList);

        var _this = _possibleConstructorReturn(this, (BlogsList.__proto__ || Object.getPrototypeOf(BlogsList)).call(this, props));

        _this.removeBlogItemHandler = _this.removeBlogItemHandler.bind(_this);
        return _this;
    }

    _createClass(BlogsList, [{
        key: 'removeBlogItemHandler',
        value: function removeBlogItemHandler(removedItemId) {
            this.props.removeBlogItemHandler(removedItemId);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'blogsList' },
                this.props.blogList.map(function (blogItem) {
                    return _react2.default.createElement(_blogItem2.default, { key: blogItem.id, blog: blogItem, removeBlogItemHandler: _this2.removeBlogItemHandler });
                })
            );
        }
    }]);

    return BlogsList;
}(_react2.default.Component);

exports.default = BlogsList;

/***/ }),
/* 6 */
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

var BlogItem = function (_React$Component) {
    _inherits(BlogItem, _React$Component);

    function BlogItem(props) {
        _classCallCheck(this, BlogItem);

        var _this = _possibleConstructorReturn(this, (BlogItem.__proto__ || Object.getPrototypeOf(BlogItem)).call(this, props));

        _this.removeBlogItem = _this.removeBlogItem.bind(_this);
        return _this;
    }

    _createClass(BlogItem, [{
        key: 'removeBlogItem',
        value: function removeBlogItem() {
            this.props.removeBlogItem(this.props.blog.id);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'article',
                { className: 'blogsList-blogItem' },
                _react2.default.createElement(
                    'p',
                    { className: 'blogText' },
                    this.props.blog.text
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'blogDate' },
                    this.props.blog.date.toLocaleTimeString()
                ),
                _react2.default.createElement('input', { type: 'button', value: 'x', onClick: this.removeBlogItem.bind(this) }),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'b',
                        null,
                        'Author: ',
                        this.props.blog.author
                    )
                )
            );
        }
    }]);

    return BlogItem;
}(_react2.default.Component);

exports.default = BlogItem;

/***/ })
/******/ ]);