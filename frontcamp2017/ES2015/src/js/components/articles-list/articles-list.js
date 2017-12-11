import ARTICLES_SERVICE from 'js/services/ARTICLES_SERVICE';
import 'js/components/articles-list/articles-list.scss';

export default class Articles {
    constructor({ targetElement, afterInserted, step = 10 }) {
        this.targetElement = targetElement;
        this._afterInserted = afterInserted;
        this._lastItemIndex = 0;
        this._step = step;
        this._subscribeOnEvents();
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

    static parseArticle(articleItem) {
        return `<li class="articlesList-item"> 
                    <h1 class="articleTitle">${articleItem.title}</h1> 
                    <p class="articleDate">
                    ${articleItem.author ? `by <span class="articleAuthor">${articleItem.author}</span> - ` : ''} 
                    ${Articles.formatDate(articleItem.publishedAt)}</p> 
                    <img src="${articleItem.urlToImage ? articleItem.urlToImage : ''}" alt="" class="articleImage"> 
                    <p class="articleDescription">${articleItem.description ? articleItem.description : ''}</p>
                </li>`;
    }

    _subscribeOnEvents() {
        document.addEventListener('showArticlesList', (e) => {
            Articles.getArticles(e.detail.channelKey)
                .then((articlesList) => {
                    this.articlesList = articlesList.articles;
                    this._lastItemIndex = 0;
                    this.render(this.articlesList);
                });
        }, false);
    }

    _attachActionHandlers() {
        this.showMoreElement.addEventListener('click', () => {
            this.articlesListElement.innerHTML = this.articlesListElement.innerHTML + this._uploadNewArticles();

            if (this._lastItemIndex === this.articlesList.length) {
                this.showMoreElement.classList.add('articlesList-showMoreButton--hidden');
            }
        });
    }

    _uploadNewArticles() {
        const limit = this._lastItemIndex + this._step;
        let outputArticlesList = '';

        for (let i = this._lastItemIndex; i < limit; i++) {
            if (this.articlesList[i]) {
                outputArticlesList += Articles.parseArticle(this.articlesList[i]);
                this._lastItemIndex++;
            } else {
                break;
            }
        }

        return outputArticlesList;
    }

    render() {
        this.articlesListElement = document.createElement('ul');
        this.articlesListElement.className = 'articlesList';
        this.showMoreElement = document.createElement('button');
        this.showMoreElement.className = 'btn articlesList-showMoreButton';
        this.showMoreElement.innerText = 'Show More';

        this.targetElement.innerHTML = '';
        this.targetElement.appendChild(this.articlesListElement);
        this.targetElement.appendChild(this.showMoreElement);

        this.articlesListElement.innerHTML = this._uploadNewArticles();
        this._afterInserted();

        this._attachActionHandlers();
        window.scrollTo(0, 0);
    }
}
