const API_KEY = '277b31345f3f4e5cb68a51e07666bd34';

class APP_SERVICES {
    static getArticles(channelKey) {
        return fetch(`https://newsapi.org/v2/everything?sources=${channelKey}&apiKey=${API_KEY}`, {})
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .catch((err) => {
                throw new TypeError(err);
            });
    }

    static getChannels() {
        return fetch('./data/channels-list.json', {})
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                throw new TypeError(`${response.status} Failed to upload resources: `);
            })
            .catch((err) => {
                throw new TypeError(err);
            });
    }
}