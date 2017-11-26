class Channels {
    constructor({targetElement}) {
        this.init(targetElement);
    }

    static getSources() {
        return APP_SERVICES.getSources()
    }

    render(targetElement, sourcesList) {
        let sourcesListOutput = ``;

        this.sourcesElement = document.createElement('ul');
        this.sourcesElement.className = 'sourcesList';

        targetElement.innerHTML = ``;
        targetElement.appendChild(this.sourcesElement);

        for (let i = 0; i < sourcesList.length; i++) {
            sourcesListOutput += this._parseSource(sourcesList[i]);
        }

        this.sourcesElement.innerHTML = sourcesListOutput;
        this._attachEventListeners(targetElement);
    }

    _attachEventListeners(targetElement) {
        let sourceItemsList = this.sourcesElement.querySelectorAll('.sourcesList-item');
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

    init(targetElement) {
        Channels.getSources()
            .then((parsedResponse) => {
                this.sources = parsedResponse.sources;
                this.render(targetElement, this.sources);
            })
    }
}