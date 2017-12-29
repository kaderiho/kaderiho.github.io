import Cache from './CACHE_SERVICE';

class CHANNELS_SERVICE {
    static getChannels() {
        let storageData = this.getCachedData();

        // Check local storage cache firstly
        if (storageData) {
            return storageData;
        }

        return CHANNELS_SERVICE.retrieveChannels().then((response) => {
            if (response.ok) {
                return response.json().then((channelsList) => {
                    CHANNELS_SERVICE.setCacheData(channelsList.channels);

                    return channelsList.channels;
                });
            }
        });
    }

    static retrieveChannels() {
        return fetch('./data/channels-list.json')
    }

    static getCachedData() {
        return Cache.getItem('channelsList');
    }

    static setCacheData(channelsList) {
        Cache.setItem('channelsList', channelsList);
    }
}

export default CHANNELS_SERVICE
