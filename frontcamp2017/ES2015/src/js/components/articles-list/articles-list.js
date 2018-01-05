import ARTICLES_SERVICE from 'js/services/ARTICLES_SERVICE';
import './articles-list.scss';
import Store from 'js/store';

export default class Articles {
    constructor({ initElement, afterInserted, step = 10 }) {
        this._afterInserted = afterInserted;
        this.initElement = initElement;
        this._lastItemIndex = 0;
        this._step = step;
        this._storeSubscribe();
    }

    static getArticles(channelKey) {
        return ARTICLES_SERVICE.getArticles(channelKey);
    }

    static formatDate(dateString) {
        const date = new Date(dateString);
        const dateOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        return date.toLocaleString('en-us', dateOptions);
    }

    static getArticleHTML(articleItem) {
        return `<li class="articlesList-item"> 
                    <h1 class="articleTitle">${articleItem.title}</h1> 
                    <p class="articleDate">
                    ${articleItem.author ? `by <span class="articleAuthor">${articleItem.author}</span> - ` : ''} 
                    ${Articles.formatDate(articleItem.publishedAt)}</p> 
                    <img src="${articleItem.urlToImage ? articleItem.urlToImage : ''}" alt="" class="articleImage"> 
                    <p class="articleDescription">${articleItem.description ? articleItem.description : ''}</p>
                </li>`;
    }
}

Articles.prototype.render = function() {
    this.articlesListElement = document.createElement('ul');
    this.articlesListElement.className = 'articlesList';
    this.showMoreElement = document.createElement('button');
    this.showMoreElement.className = 'btn articlesList-showMoreButton';
    this.showMoreElement.innerText = 'Show More';

    this.initElement.innerHTML = '';
    this.initElement.appendChild(this.articlesListElement);

    if (this.articlesList.length) {
        this.initElement.appendChild(this.showMoreElement);
    }

    this.articlesListElement.innerHTML = this._retrieveArticles();

    this._attachHandlers();
    window.scrollTo(0, 0);
};

Articles.prototype._storeSubscribe = function() {
    Store.subscribe(() => {
        this.articlesList = Store.getState().selectedChannelArticles;

        if (!this.articlesList) {
            return;
        }

        this._lastItemIndex = 0;
        this.render();
    });
};

Articles.prototype._attachHandlers = function() {
    this.showMoreElement.addEventListener('click', () => {
        this.articlesListElement.innerHTML = this.articlesListElement.innerHTML + this._retrieveArticles();

        if (this._lastItemIndex === this.articlesList.length) {
            this.showMoreElement.classList.add('articlesList-showMoreButton--hidden');
        }
    });
};

Articles.prototype._retrieveArticles = function() {
    const limit = this._lastItemIndex + this._step;
    let outputArticlesList = '';

    for (let i = this._lastItemIndex; i < limit; i++) {
        if (this.articlesList[i]) {
            outputArticlesList += Articles.getArticleHTML(this.articlesList[i]);
            this._lastItemIndex++;
        } else {
            break;
        }
    }

    return outputArticlesList;
};