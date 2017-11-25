class Articles {
    constructor({targetElement, afterInserted}) {
        this.afterInserted = afterInserted || function() {};
        this.targetElement = targetElement;
        this._attachEventListeners();
    }

    static getArticles(sourceKey) {
        return APP_SERVICES.getArticles(sourceKey).then((response) => response.json());
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

    _attachEventListeners() {
        document.addEventListener('showArticlesList',(e) => {
            Articles.getArticles(e.detail.sourceKey)
                .then((articlesList) => {
                    this.render(articlesList.articles);
                });
        }, false);
    }

    _parseArticle(articleItem) {
        let outputItem = ``;
        let articleAuthor = articleItem.author ? `by <span class="articleAuthor">${articleItem.author}</span> - ` : ``;
        let articleTitle = articleItem.title ? `<h1 class="articleTitle">${articleItem.title}</h1>` : '';
        let articleImage = articleItem.urlToImage ? `<img src="${articleItem.urlToImage}" alt="" class="articleImage">` : ``;

        outputItem += `<li class="articlesList-item">
                            ${articleTitle}
                            <p class="articleDate">${articleAuthor} ${Articles.formatDate(articleItem.publishedAt)}</span></p>
                            ${articleImage}
                            <p class="articleDescription">${articleItem.description}</p>
                       </li>`;

        return outputItem;
    }

    render(articlesList) {
        let outputArticlesList = ``;

        this.articlesListElement = document.createElement('ul');
        this.articlesListElement.className = 'articlesList';

        for (let i = 0;i < articlesList.length;i++) {
            outputArticlesList += this._parseArticle(articlesList[i]);
        }

        this.targetElement.innerHTML = ``;
        this.targetElement.appendChild(this.articlesListElement);
        this.articlesListElement.innerHTML = outputArticlesList;
        this.afterInserted();

        // TODO: add possibility to go by tab clicking
        // TODO: read about expression in string templates
        // TODO: Add view more button (show by default a configured number of articles);
    }
}