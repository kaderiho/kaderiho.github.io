'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Articles = function () {
    function Articles(_ref) {
        var targetElement = _ref.targetElement,
            afterInserted = _ref.afterInserted,
            _ref$step = _ref.step,
            step = _ref$step === undefined ? 10 : _ref$step;

        _classCallCheck(this, Articles);

        this.targetElement = targetElement;
        this._afterInserted = afterInserted;
        this._lastItemIndex = 0;
        this._step = step;
        this._subscribeOnEvents();
    }

    _createClass(Articles, [{
        key: '_subscribeOnEvents',
        value: function _subscribeOnEvents() {
            var _this = this;

            document.addEventListener('showArticlesList', function (e) {
                Articles.getArticles(e.detail.channelKey).then(function (articlesList) {
                    _this.articlesList = articlesList.articles;
                    _this._lastItemIndex = 0;
                    _this.render(_this.articlesList);
                });
            }, false);
        }
    }, {
        key: '_attachActionHandlers',
        value: function _attachActionHandlers() {
            var _this2 = this;

            this.showMoreElement.addEventListener('click', function () {
                _this2.articlesListElement.innerHTML = _this2.articlesListElement.innerHTML + _this2._uploadNewArticles();

                if (_this2._lastItemIndex === _this2.articlesList.length) {
                    _this2.showMoreElement.classList.add('articlesList-showMoreButton--hidden');
                }
            });
        }
    }, {
        key: '_uploadNewArticles',
        value: function _uploadNewArticles() {
            var limit = this._lastItemIndex + this._step;
            var outputArticlesList = '';

            for (var i = this._lastItemIndex; i < limit; i++) {
                if (this.articlesList[i]) {
                    outputArticlesList += Articles.parseArticle(this.articlesList[i]);
                    this._lastItemIndex++;
                } else {
                    break;
                }
            }

            return outputArticlesList;
        }
    }, {
        key: 'render',
        value: function render() {
            this.articlesListElement = document.createElement('ul');
            this.articlesListElement.className = 'articlesList';
            this.showMoreElement = document.createElement('button');
            this.showMoreElement.className = 'articlesList-showMoreButton';
            this.showMoreElement.innerText = 'Show More';

            this.targetElement.innerHTML = '';
            this.targetElement.appendChild(this.articlesListElement);
            this.targetElement.appendChild(this.showMoreElement);

            this.articlesListElement.innerHTML = this._uploadNewArticles();
            this._afterInserted();

            this._attachActionHandlers();
            window.scrollTo(0, 0);
        }
    }], [{
        key: 'getArticles',
        value: function getArticles(channelKey) {
            return ARTICLES_SERVICE.getArticles(channelKey);
        }
    }, {
        key: 'formatDate',
        value: function formatDate(dateString) {
            var date = new Date(dateString);
            var dateOptions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };

            return date.toLocaleString('en-us', dateOptions);
        }
    }, {
        key: 'parseArticle',
        value: function parseArticle(articleItem) {
            return '<li class="articlesList-item"> \n                    <h1 class="articleTitle">' + articleItem.title + '</h1> \n                    <p class="articleDate">\n                    ' + (articleItem.author ? 'by <span class="articleAuthor">' + articleItem.author + '</span> - ' : '') + ' \n                    ' + Articles.formatDate(articleItem.publishedAt) + '</p> \n                    <img src="' + (articleItem.urlToImage ? articleItem.urlToImage : '') + '" alt="" class="articleImage"> \n                    <p class="articleDescription">' + (articleItem.description ? articleItem.description : '') + '</p>\n                </li>';
        }
    }]);

    return Articles;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Channels = function () {
    function Channels(_ref) {
        var targetElement = _ref.targetElement;

        _classCallCheck(this, Channels);

        this.targetElement = targetElement;
        this.init(targetElement);
        this._subscribeOnEvents();
    }

    _createClass(Channels, [{
        key: '_subscribeOnEvents',
        value: function _subscribeOnEvents() {
            var _this = this;

            document.addEventListener('showChannelsList', function () {
                _this.render(_this.targetElement, _this.channels);
            });
        }
    }, {
        key: '_attachActionHandlers',
        value: function _attachActionHandlers() {
            var channelsList = this.channesListElement.querySelectorAll('.channelsList-item');
            var showArticlesEvent = new CustomEvent('showArticlesList', { detail: {} });

            var _loop = function _loop(channelItem) {
                channelItem.addEventListener('click', function () {
                    showArticlesEvent.detail.channelKey = channelItem.getAttribute('data-key');
                    document.dispatchEvent(showArticlesEvent);
                });
            };

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = channelsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var channelItem = _step.value;

                    _loop(channelItem);
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
        value: function render(targetElement, channelsList) {
            var channelsListOutput = '';

            this.channesListElement = document.createElement('ul');
            this.channesListElement.className = 'channelsList';

            targetElement.innerHTML = '';
            targetElement.appendChild(this.channesListElement);

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = channelsList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var channel = _step2.value;

                    channelsListOutput += Channels.parseChannel(channel);
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
            this._attachActionHandlers();
        }
    }, {
        key: 'init',
        value: function init(targetElement) {
            var _this2 = this;

            Channels.getChannels().then(function (parsedResponse) {
                _this2.channels = parsedResponse.channels;
                _this2.render(targetElement, _this2.channels);
            });
        }
    }], [{
        key: 'getChannels',
        value: function getChannels() {
            return CHANNELS_SERVICE.getChannels();
        }
    }, {
        key: 'parseChannel',
        value: function parseChannel(channelItem) {
            return '<li class="channelsList-item" data-key="' + channelItem.key + '">\n                    <img src="' + channelItem.logoPath + '" class="channelLogo" alt=""/>\n                    <p class="channelTitle">' + channelItem.title + '</p>\n                 </li>';
        }
    }]);

    return Channels;
}();
"use strict";

(function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API_KEY = '277b31345f3f4e5cb68a51e07666bd34';

var ARTICLES_SERVICE = function () {
    function ARTICLES_SERVICE() {
        _classCallCheck(this, ARTICLES_SERVICE);
    }

    _createClass(ARTICLES_SERVICE, null, [{
        key: 'getArticles',
        value: function getArticles(channelKey) {
            return fetch('https://newsapi.org/v2/everything?sources=' + channelKey + '&apiKey=' + API_KEY).then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            }).catch(function (err) {
                throw new TypeError(err);
            });
        }
    }]);

    return ARTICLES_SERVICE;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CHANNELS_SERVICE = function () {
    function CHANNELS_SERVICE() {
        _classCallCheck(this, CHANNELS_SERVICE);
    }

    _createClass(CHANNELS_SERVICE, null, [{
        key: 'getChannels',
        value: function getChannels() {
            return fetch('./data/channels-list.json').then(function (response) {
                if (response.ok) {
                    return response.json();
                }

                throw new TypeError(response.status + ' Failed to upload resources: ');
            }).catch(function (err) {
                throw new TypeError(err);
            });
        }
    }]);

    return CHANNELS_SERVICE;
}();
