import cacheDecorator from '../decorators/cacheDecorator';
const API_KEY = '277b31345f3f4e5cb68a51e07666bd34';

@cacheDecorator('articlesList')
class ARTICLES_SERVICE {
    static getArticles(channelKey) {
        let cachedArticles = this.getCachedData('articlesList', channelKey);

        // Check local store cache firstly
        if (cachedArticles) {
            return Promise.resolve(cachedArticles);
        }

        return ARTICLES_SERVICE.retrieveArticles(channelKey).then((response) => {
            if (response.ok) {
                return response.json().then((articlesList) => {
                    let storeData = { channelKey, articles: articlesList.articles };
                        ARTICLES_SERVICE.setCacheData(storeData);

                    return storeData;
                });
            }
        })
    }

    static retrieveArticles(channelKey) {
        return fetch(`https://newsapi.org/v2/everything?sources=${channelKey}&apiKey=${API_KEY}`)
    }
}

export default ARTICLES_SERVICE;
