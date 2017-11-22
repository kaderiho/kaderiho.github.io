let channelsList = [{
    title: 'ABC news',
    key: 'abc-news',
    logoPath: './components/sources-list/images/3.bild.png'
}];

class Channels {
    constructor() {
        Channels.init();
        Channels.attachEventListeners();
    }

    static getArticles(sourceKey) {
        APP_SERVICES.getArticles(sourceKey).then((response) => {

        });
    }

    static render() {
        let sourcesList = ``;

        this.sourcesElement = document.createElement('ul');

        this.sourcesElement.className = 'sourcesList';
        document.querySelector('.sourcesContainer').appendChild(this.sourcesElement);

        for (let i = 0;i < 15;i++) {
            sourcesList += `<li class="sourcesList-item" data-key="${channelsList[0].key}">
                                <img src=${channelsList[0].logoPath} class="sourceLogo"/>
                                <p class="sourceTitle">${channelsList[0].title}</p>
                            </li>`;
        }

        document.querySelector('.sourcesList').innerHTML = sourcesList;
    }

    static attachEventListeners() {
        let sourceItems = this.sourcesElement.querySelectorAll('.sourcesList-item');

        sourceItems.forEach((source, index) => {
            source.addEventListener('click', () => {
                Channels.getArticles(source.getAttribute('data-key'));
            });
        })
    }

    static init() {
        Channels.render();
    }
}