
class Channels {
    constructor({targetElement}) {
        Channels.init(targetElement);

        document.addEventListener('showSourcesList', () => {
            Channels.init(targetElement);
        });
    }

    static checkSourcesStorage() {}

    static getSources() {
        return APP_SERVICES.getSources();
    }

    static render(targetElement, sourcesList) {
        let sourcesListOutput = ``;

        this.sourcesElement = document.createElement('ul');
        this.sourcesElement.className = 'sourcesList';

        targetElement.innerHTML = '';
        targetElement.appendChild(this.sourcesElement);

        for (let i = 0; i < sourcesList.length; i++) {
            let source = sourcesList[i];

            sourcesListOutput += `<li class="sourcesList-item" data-key="${source.key}">
                                <img src="${source.logoPath}" class="sourceLogo"/>
                                <p class="sourceTitle">${source.title}</p>
                            </li>`;
        }

        this.sourcesElement.innerHTML = sourcesListOutput;
    }

    static attachEventListeners() {
        let sourceItems = this.sourcesElement.querySelectorAll('.sourcesList-item');

        sourceItems.forEach((source) => {
            source.addEventListener('click', () => {
                let showArticlesEvent = new CustomEvent('showArticlesList', {
                    detail: {
                        sourceKey: source.getAttribute('data-key')
                    }
                });

                document.dispatchEvent(showArticlesEvent);
            });
        })
    }

    static init(targetElement) {
        Channels.getSources()
            .then((res) => res.json())
            .then((parsedResponse) => {
                Channels.render(targetElement, parsedResponse.sources);
                Channels.attachEventListeners();
            });
    }
}