class Articles {
    constructor({targetElement, afterInserted}) {
        document.addEventListener('showArticlesList', function (e) {
            APP_SERVICES.getArticles(e.detail.sourceKey)
                .then((response) => response.json())
                .then((articlesList) => {
                    Articles.render(articlesList.articles, targetElement);
            });
        }, false);

        Articles.afterInserted = afterInserted || function() {};
    }

    static formatDate(publishedDate) {
        let date = new Date(publishedDate);
        let options = { year: 'numeric', month: 'long', day: 'numeric' };

        return date.toLocaleString('en-us', options);
    }

    static render(articlesList, targetElement) {
        let outputList = ``;

        this.articlesListElement = document.createElement('ul');
        this.articlesListElement.className = 'articlesList';

        targetElement.innerHTML = ``;
        targetElement.appendChild(this.articlesListElement);

        // TODO: read about expression in string templates

        for (let i = 0;i < articlesList.length;i++) {
            let article = articlesList[i];
            outputList += `<li class="articlesList-item">
                                <h1 class="articleTitle">${article.title}</h1>
                                <img src="${article.urlToImage ? article.urlToImage : ''}" alt="" class="articleImage">
                                <p class="articleDescription">${article.description}</p>
                                <span class="articleDate">${Articles.formatDate(article.publishedAt)}</span>
                          </li>`;
        }

        this.articlesListElement.innerHTML = outputList;
        this.afterInserted();

        // TODO: Add view more button (show by default a configured number of articles);
    }
}