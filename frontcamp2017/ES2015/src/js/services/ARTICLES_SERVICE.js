import Cache from './CACHE_SERVICE';
const API_KEY = '277b31345f3f4e5cb68a51e07666bd34';

class ARTICLES_SERVICE {
    static getArticles(channelKey) {
        let cachedArticles = this.getCachedArticlesByChannelKey(channelKey);

        // Check local storage cache firstly
        if (cachedArticles) {

            return Promise.resolve(cachedArticles);
        }

        return ARTICLES_SERVICE.getArticlesFromServer(channelKey).then((response) => {

            if (response.ok) {
                return response.json().then((articlesList) => {
                    ARTICLES_SERVICE.setCacheData(channelKey, articlesList.articles);
                    return ARTICLES_SERVICE.getCachedArticlesByChannelKey(channelKey);
                });
            }

        })
    }

    static getArticlesFromServer(channelKey) {
        return fetch(`https://newsapi.org/v2/everything?sources=${channelKey}&apiKey=${API_KEY}`)
    }

    static getCachedData() {
        return Cache.getItem('articlesList');
    }

    static getCachedArticlesByChannelKey(channelKey) {
        let cachedData = Cache.getItem('articlesList');


        if (!cachedData) {
            return;
        }

        for (let i = 0;i < cachedData.length;i++) {
            if (cachedData[i].channelKey === channelKey) {
                return cachedData[i];
            }
        }

        return false;
    }

    static setCacheData(channelKey, articlesList) {
        let outputCache = ARTICLES_SERVICE.getCachedData() || [];
            outputCache.push({channelKey, articles: articlesList});

        Cache.setItem('articlesList', outputCache)
    }
}

export default ARTICLES_SERVICE;
