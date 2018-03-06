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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_components_blog_app_blog_app__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_index__ = __webpack_require__(10);






const port = 3000;
const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static('dist'));

app.get('/', (req, res) => {
    const appTemplate = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__client_components_blog_app_blog_app__["a" /* default */], null));
    const outputTemplate = Object(__WEBPACK_IMPORTED_MODULE_4__templates_index__["a" /* default */])(appTemplate);

    res.send(outputTemplate);
});

app.listen(3000, () => {
    console.log('Server is running on: 3000 port');
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blogs_filter_blogs_filter__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_adding_blog_adding__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blogs_list_blogs_list__ = __webpack_require__(8);







class BlogApp extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputPostMessage: '',
            inputPostAuthor: '',
            filterText: '',
            blogsList: []
        };

        this.inputMessageAuthorHandler = inputPostAuthor => {
            this.setState({
                inputPostAuthor
            });
        };

        this.submitMessageHandler = () => {
            this.setState(prevState => {
                return {
                    blogsList: prevState.blogsList.concat([{
                        text: this.state.inputPostMessage,
                        id: this.state.blogsList.length + 1,
                        author: this.state.inputPostAuthor,
                        date: new Date()
                    }]),
                    inputPostMessage: '',
                    inputPostAuthor: ''
                };
            });
        };

        this.removeBlogItemHandler = removedItemId => {
            this.setState(prevState => {
                return {
                    blogsList: prevState.blogsList.filter(blogItem => blogItem.id !== removedItemId)
                };
            });
        };

        this.inputMessageHandler = inputPostMessage => {
            this.setState({
                inputPostMessage
            });
        };

        this.filterHandler = filterText => {
            this.setState({
                filterText
            });
        };
    }

    render() {
        const { inputPostMessage, inputPostAuthor, blogsList, filterText } = this.state;
        let filteredBlogList;

        if (!filterText.length) {
            filteredBlogList = blogsList;
        } else {
            filteredBlogList = blogsList.filter(blogItem => blogItem.author.indexOf(filterText) !== -1);
        }

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__blog_adding_blog_adding__["a" /* default */], { inputMessageAuthorHandler: this.inputMessageAuthorHandler,
                submitMessageHandler: this.submitMessageHandler,
                inputPostMessage: inputPostMessage,
                inputMessageHandler: this.inputMessageHandler,
                inputPostAuthor: inputPostAuthor }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__blogs_list_blogs_list__["a" /* default */], { removeBlogItemHandler: this.removeBlogItemHandler,
                blogList: filteredBlogList }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__blogs_filter_blogs_filter__["a" /* default */], { filterHandler: this.filterHandler,
                filterText: filterText })
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (BlogApp);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);



class BlogsFilter extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(initProps) {
        super(initProps);

        this.filterHandler = event => {
            this.props.filterHandler(event.target.value);
        };
    }

    render() {
        let { filterText } = this.props;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: filterText, placeholder: 'Filter by author name', onChange: this.filterHandler });
    }
}

/* harmony default export */ __webpack_exports__["a"] = (BlogsFilter);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);



class BlogAdding extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(initProps) {
        super(initProps);

        const { props } = this;

        this.state = {
            isSubmitButtonEnabled: false
        };

        this.inputMessageHandler = event => {
            props.inputMessageHandler(event.target.value);
        };

        this.inputMessageAuthorHandler = event => {
            props.inputMessageAuthorHandler(event.target.value);
        };

        this.submitMessageHandler = event => {
            props.submitMessageHandler();
            event.preventDefault();
        };
    }

    render() {
        const { inputPostAuthor, inputPostMessage } = this.props;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'form',
            { onSubmit: this.submitMessageHandler },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    'Put your message there: ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: inputPostMessage, onChange: this.inputMessageHandler, placeholder: 'Your message' })
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    'Author name: ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: inputPostAuthor, onChange: this.inputMessageAuthorHandler, placeholder: 'Author nickname' })
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { type: 'submit', value: 'Submit', disabled: !inputPostMessage.length || !inputPostAuthor.length },
                'Add'
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (BlogAdding);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_item_blog_item__ = __webpack_require__(9);




class BlogsList extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(initProps) {
        super(initProps);

        this.removeBlogItemHandler = removedItemId => {
            this.props.removeBlogItemHandler(removedItemId);
        };
    }

    render() {
        const { blogList } = this.props;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'blogsList' },
            blogList.map(blogItem => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__blog_item_blog_item__["a" /* default */], { removeBlogItemHandler: this.removeBlogItemHandler,
                key: blogItem.id,
                blog: blogItem }))
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (BlogsList);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);



class BlogItem extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(initProps) {
        super(initProps);

        this.removeBlogItemHandler = () => {
            this.props.removeBlogItemHandler(this.props.blog.id);
        };
    }

    render() {
        const { date: blogDate, text: blogText, author: blogAuthor } = this.props.blog;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'article',
            { className: 'blogsList-blogItem' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                { className: 'blogText' },
                blogText
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'blogDate' },
                blogDate.toLocaleTimeString()
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'button', value: 'x', onClick: this.removeBlogItemHandler.bind(this) }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    null,
                    'Author: ',
                    blogAuthor
                )
            )
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (BlogItem);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (appComponent => {
    return `<!doctype html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Basic ReactJS application</title>
            </head>
            
            <body>
                <div id="app">${appComponent}</div>
                <script src='/client/index.bundle.js'></script>
            </body>
        </html>`;
});

/***/ })
/******/ ]);