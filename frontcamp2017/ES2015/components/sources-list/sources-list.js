class Channels {
    constructor({targetElement}) {
        this.init(targetElement);
    }

    static getSources() {
        return APP_SERVICES.getSources()
    }

    _attachEventListeners(targetElement) {
        let sourceItemsList = this.sourcesListElement.querySelectorAll('.sourcesList-item');
        let showArticlesEvent = new CustomEvent('showArticlesList', {detail: {}});

        sourceItemsList.forEach((sourceItem) => {
            sourceItem.addEventListener('click', () => {
                showArticlesEvent.detail.sourceKey = sourceItem.getAttribute('data-key');
                document.dispatchEvent(showArticlesEvent);
            });
        });

        document.addEventListener('showSourcesList', () => {
            this.render(targetElement, this.sources);
        });
    }

    _parseSource(sourceItem) {
        let outputSource = `<li class="sourcesList-item" data-key="${sourceItem.key}">
                                <img src="${sourceItem.logoPath}" class="sourceLogo" alt=""/>
                                <p class="sourceTitle">${sourceItem.title}</p>
                           </li>`;

        return outputSource;
    }

    render(targetElement, sourcesList) {
        let sourcesListOutput = ``;

        this.sourcesListElement = document.createElement('ul');
        this.sourcesListElement.className = 'sourcesList';

        targetElement.innerHTML = ``;
        targetElement.appendChild(this.sourcesListElement);

        for (let i = 0; i < sourcesList.length; i++) {
            sourcesListOutput += this._parseSource(sourcesList[i]);
        }

        this.sourcesListElement.innerHTML = sourcesListOutput;
        this._attachEventListeners(targetElement);
    }

    init(targetElement) {
        Channels.getSources()
            .then((parsedResponse) => {
                this.sources = parsedResponse.sources;
                this.render(targetElement, this.sources);
            })
    }
}