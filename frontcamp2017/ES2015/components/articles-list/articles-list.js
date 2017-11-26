class Articles {
    constructor({ targetElement, afterInserted, step = 10 }) {
        this.targetElement = targetElement;
        this.afterInserted = afterInserted;
        this.lastItemIndex = 0;
        this.step = step;
        this._subscribeOnEvents();
    }

    static getArticles(sourceKey) {
        return APP_SERVICES.getArticles(sourceKey);
    }

    static formatDate(dateString) {
        let date = new Date(dateString);
        let dateOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        return date.toLocaleString('en-us', dateOptions);
    }

    _subscribeOnEvents() {
        document.addEventListener('showArticlesList', (e) => {
            Articles.getArticles(e.detail.sourceKey)
                .then((articlesList) => {
                    this.articlesList = articlesList.articles;
                    this.lastItemIndex = 0;
                    this.render(this.articlesList);
                });
        }, false);
    }

    _attachEventListeners() {
        if (this.showMoreElement) {
            this.showMoreElement.addEventListener('click', () => {
                this.articlesListElement.innerHTML = this.articlesListElement.innerHTML + this._uploadNewArticles();
            });
        }
    }

    _parseArticle(articleItem) {
        let articleImage = articleItem.urlToImage ? `<img src="${articleItem.urlToImage}" alt="" class="articleImage">` : ``;
        let articleAuthor = articleItem.author ? `by <span class="articleAuthor">${articleItem.author}</span> - ` : ``;
        let articleDate = `<p class="articleDate">${articleAuthor} ${Articles.formatDate(articleItem.publishedAt)}</span></p>`;
        let articleTitle = articleItem.title ? `<h1 class="articleTitle">${articleItem.title}</h1>` : '';
        let articleDescription = `<p class="articleDescription">${articleItem.description}</p>`;

        return `<li class="articlesList-item"> ${articleTitle} ${articleDate} ${articleImage} ${articleDescription}</li>`;
    }

    _uploadNewArticles() {
        let limit = this.lastItemIndex + this.step;
        let outputArticlesList = ``;

        for (let i = this.lastItemIndex; i < limit; i++) {
            if (this.articlesList[i]) {
                outputArticlesList += this._parseArticle(this.articlesList[i]);
                this.lastItemIndex++;
            } else {
                this.showMoreElement.classList.add('articlesList-showMoreButton-hidden');
                break;
            }
        }

        if (!this.articlesList[this.lastItemIndex + 1]) {
            this.showMoreElement.classList.add('articlesList-showMoreButton-hidden');
        }

        return outputArticlesList;
    }

    render(articlesList) {
        this.articlesListElement = document.createElement(`ul`);
        this.articlesListElement.className = `articlesList`;
        this.showMoreElement = document.createElement(`button`);
        this.showMoreElement.className = `articlesList-showMoreButton`;
        this.showMoreElement.innerText = `Show More`;

        this.targetElement.innerHTML = ``;
        this.targetElement.appendChild(this.articlesListElement);
        this.targetElement.appendChild(this.showMoreElement);

        this.articlesListElement.innerHTML = this._uploadNewArticles();
        this.afterInserted();

        this._attachEventListeners();
    }
}