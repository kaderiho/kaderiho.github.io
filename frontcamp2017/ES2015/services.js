const API_KEY = '277b31345f3f4e5cb68a51e07666bd34';

class APP_SERVICES {
    constructor() {}

    static getArticles(sourceKey) {
        return fetch(`https://newsapi.org/v2/everything?sources=${sourceKey}&apiKey=${API_KEY}`, {
            method: 'GET',
        });
    }

    static getSources() {
        return fetch('./data/sources-list.json', {
            method: 'GET'
        })
    }
}