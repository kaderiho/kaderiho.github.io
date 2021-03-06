webpackJsonp([0],{

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CHANNELS_SERVICE = __webpack_require__(131);

var _CHANNELS_SERVICE2 = _interopRequireDefault(_CHANNELS_SERVICE);

var _ARTICLES_SERVICE = __webpack_require__(130);

var _ARTICLES_SERVICE2 = _interopRequireDefault(_ARTICLES_SERVICE);

var _actionTypes = __webpack_require__(92);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

__webpack_require__(359);

var _appStore = __webpack_require__(91);

var _appStore2 = _interopRequireDefault(_appStore);

__webpack_require__(360);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var channelClickHandler = function channelClickHandler() {
    var channelKey = this.getAttribute('data-key');

    _appStore2.default.dispatch({ type: _actionTypes2.default.CHANNELS_LIST_INIT, channels: [] });
    _appStore2.default.dispatch({ type: _actionTypes2.default.NAVIGATION_VISIBILITY, isNavigationVisible: true });

    _ARTICLES_SERVICE2.default.getArticles(channelKey).then(function (channelObject) {
        _appStore2.default.dispatch({ type: _actionTypes2.default.ARTICLES_LIST_INIT, articles: channelObject.articles });
    });
};

var Channels = function () {
    function Channels(_ref) {
        var initElement = _ref.initElement;

        _classCallCheck(this, Channels);

        this.initElement = initElement;
        this._storeSubscribe();
        this.init();
    }

    _createClass(Channels, [{
        key: 'init',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return Channels.getChannels();

                            case 2:
                                this.channels = _context.sent;

                                _appStore2.default.dispatch({ type: _actionTypes2.default.CHANNELS_LIST_INIT, channels: this.channels });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function init() {
                return _ref2.apply(this, arguments);
            }

            return init;
        }()
    }, {
        key: '_storeSubscribe',
        value: function _storeSubscribe() {
            var _this = this;

            _appStore2.default.subscribe(function () {
                var channels = _appStore2.default.getState().channels;
                _this.render(_this.initElement, channels);
            });
        }
    }, {
        key: '_attachHandlers',
        value: function _attachHandlers() {
            var channelsList = this.channesListElement.querySelectorAll('.channelsList-item');

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = channelsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var channelItem = _step.value;

                    channelItem.addEventListener('click', channelClickHandler);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'render',
        value: function render(initElement, channelsList) {
            var channelsListOutput = '';

            this.channesListElement = document.createElement('ul');
            this.channesListElement.className = 'channelsList';

            initElement.innerHTML = '';
            initElement.appendChild(this.channesListElement);

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = channelsList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var channel = _step2.value;

                    channelsListOutput += Channels.getChannelHTML(channel);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this.channesListElement.innerHTML = channelsListOutput;
            this._attachHandlers();
        }
    }], [{
        key: 'getChannels',
        value: function getChannels() {
            return _CHANNELS_SERVICE2.default.getChannels();
        }
    }, {
        key: 'getChannelHTML',
        value: function getChannelHTML(channelItem) {
            return '<li class="channelsList-item" data-key="' + channelItem.key + '">\n                    <img src="' + channelItem.logoPath + '" class="channelLogo" alt=""/>\n                    <p class="channelTitle">' + channelItem.title + '</p>\n                 </li>';
        }
    }]);

    return Channels;
}();

exports.default = Channels;

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

module.exports = {"channels":[{"key":"abc-new","title":"ABC News","logoPath":"./data/channels-images/touch-icon-ipad-retina.png"},{"key":"abc-news-au","title":"ABC News(AU)","logoPath":"./data/channels-images/apple-touch-icon-144x144.png"},{"key":"aftenposten","title":"Aftenposten","logoPath":"./data/channels-images/apple-touch-icon-120x120.png"},{"key":"al-jazeera-english","title":"Al Jazeera English","logoPath":"./data/channels-images/touch-icon-iphone-retina.png"},{"key":"ansa","title":"ANSA.it","logoPath":"./data/channels-images/ansa-144-precomposed.png"},{"key":"argaam","title":"Argaam","logoPath":"./data/channels-images/apple-touch-icon-precomposed.png"},{"key":"ars-technica","title":"Ars Technica","logoPath":"./data/channels-images/apple-touch-icon.png"},{"key":"australian-financial-review","title":"Australian Financial Review","logoPath":"./data/channels-images/apple-touch-icon-144x144-precomposed.png"},{"key":"axios","title":"Axios","logoPath":"./data/channels-images/apple-touch-icon-120x120-axiros.png"},{"key":"bbc-news","title":"BCC News","logoPath":"./data/channels-images/B-120-3091b8.png"},{"key":"bbc-sport","title":"BCC Sport","logoPath":"./data/channels-images/B-120-3091b8.png"},{"key":"bild","title":"Bild","logoPath":"./data/channels-images/3.bild.png"},{"key":"blasting-news-br","title":"Blasting News Br","logoPath":"./data/channels-images/touch-icon-iphone-retina-blasting.png"},{"key":"bleacher-report","title":"Bleacher Report","logoPath":"./data/channels-images/appleTouchIcon.png"},{"key":"bloomberg","title":"Bloomberg","logoPath":"./data/channels-images/apple-touch-icon-120x120-ef3226f2bd.png"},{"key":"breitbart-news","title":"Breitbart News","logoPath":"./data/channels-images/apple-touch-icon-152x152.png"},{"key":"business-insider","title":"Business Insider","logoPath":"./data/channels-images/apple-touch-icon-precomposed-1.png"},{"key":"business-insider-uk","title":"Business Insider (UK)","logoPath":"./data/channels-images/apple-touch-icon-precomposed-1.png"},{"key":"buzzfeed","title":"Buzzfeed","logoPath":"./data/channels-images/touch-icon-ios_120.208a0e329cd6e8d831b21ae17fb6aabb.png"},{"key":"cbc-news","title":"CBC News","logoPath":"./data/channels-images/apple-touch-icon-2.png"}]}

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(361);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(50)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./channels-list.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./channels-list.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(undefined);
// imports


// module
exports.push([module.i, ".channelsContainer {\n  text-align: center;\n  margin: 50px 0; }\n\n.channelsList {\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  justify-content: space-between;\n  padding: 0; }\n\n.channelsList:after {\n  content: '';\n  flex: auto; }\n\n.channelsList-showMore {\n  cursor: pointer;\n  margin-top: 50px;\n  width: 150px;\n  height: 25px; }\n\n.channelsList-item {\n  cursor: pointer;\n  text-align: center;\n  min-height: 150px;\n  margin: 10px; }\n\n.channelsList-item:hover .channelLogo {\n  transform: scale(1.1); }\n\n.channelLogo {\n  transition: all .1s ease-out;\n  border-radius: 10px; }\n\n@media (min-width: 480px) {\n  .channelLogo {\n    width: 80px; } }\n\n.channelTitle {\n  font-family: 'Roboto-Light', 'Arial', sans-serif;\n  color: #8e8e8e; }\n\n.channelsList-item:hover .channelTitle {\n  font-family: 'Roboto-Regular', 'Arial', sans-serif;\n  color: #f42; }\n\n@media (min-width: 960px) {\n  .channelsList-item {\n    width: calc(20% - 20px); } }\n\n@media (max-width: 960px) {\n  .channelsList-item {\n    width: calc(25% - 20px); } }\n\n@media (max-width: 600px) {\n  .channelsList-item {\n    width: calc(50% - 20px); } }\n\n@media (max-width: 480px) {\n  .channelsList-item {\n    width: calc(100% - 10px); }\n  .channelLogo {\n    width: 150px; } }\n", ""]);

// exports


/***/ })

});