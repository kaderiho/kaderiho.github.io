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

    render(articlesList) {
        let navigationControlsElement = document.querySelector('.navigationControls');
        let outputArticlesList = ``;

        this.articlesListElement = document.createElement('ul');
        this.articlesListElement.className = 'articlesList';

        this.targetElement.innerHTML = ``;
        this.targetElement.appendChild(this.articlesListElement);

        // TODO: add possibility to go by tab clicking
        // TODO: read about expression in string templates

        for (let i = 0;i < articlesList.length;i++) {
            let article = articlesList[i];
            let articleAuthor = article.author ? `by <span class="articleAuthor">${article.author}</span> - ` : ``;

            outputArticlesList += `<li class="articlesList-item">
                                        <h1 class="articleTitle">${article.title ? article.title : ''}</h1>
                                        <p class="articleDate">${articleAuthor} ${Articles.formatDate(article.publishedAt)} </span></p>
                                        <img src="${article.urlToImage ? article.urlToImage : ''}" alt="" class="articleImage">
                                        <p class="articleDescription">${article.description}</p>
                                   </li>`;
        }

        this.articlesListElement.innerHTML = outputArticlesList;
        this.afterInserted();

        navigationControlsElement.classList.remove('navigationControls--hidden');
        // TODO: Add view more button (show by default a configured number of articles);
    }
}