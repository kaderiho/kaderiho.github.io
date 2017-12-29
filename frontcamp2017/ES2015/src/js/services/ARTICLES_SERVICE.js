import Cache from './CACHE_SERVICE';
const API_KEY = '277b31345f3f4e5cb68a51e07666bd34';

function myDecorator(target) {
    target.val = 1;
    target.val2 = 2;
}

@myDecorator
class ARTICLES_SERVICE {
    static getArticles(channelKey) {
        let cachedArticles = this.getCachedData(channelKey);

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

    static getCachedData(channelKey) {
        let cachedData = Cache.getItem('articlesList');

        if (!cachedData) {
            return;
        }

        if (!channelKey) {
            return cachedData;
        }

        for (let i = 0;i < cachedData.length;i++) {
            if (cachedData[i].channelKey === channelKey) {
                return cachedData[i];
            }
        }

        return false;
    }

    static setCacheData(storeData) {
        Cache.setItem('articlesList', storeData)
    }
}

export default ARTICLES_SERVICE;
