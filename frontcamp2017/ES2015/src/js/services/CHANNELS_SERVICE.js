import Cache from './CACHE_SERVICE';

class CHANNELS_SERVICE {
    static getChannels() {
        let storageData = this.getCachedData();

        // Check local storage cache firstly
        if (storageData) {
            return storageData;
        }

        return CHANNELS_SERVICE.getChannelsFromServer().then((response) => {

            if (response.ok) {
                return response.json().then((channelsList) => {
                    CHANNELS_SERVICE.setCacheData(channelsList);
                    return CHANNELS_SERVICE.getCachedData();
                });
            }

        });
    }

    static getChannelsFromServer() {
        return fetch('./data/channels-list.json')
    }

    static getCachedData() {
        return Cache.getItem('channelsList');
    }

    static setCacheData(data) {
        Cache.setItem('channelsList', data);
    }
}

export default CHANNELS_SERVICE
