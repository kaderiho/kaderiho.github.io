import cacheDecorator from '../decorators/cacheDecorator';

@cacheDecorator('channelsList')
class CHANNELS_SERVICE {
    static getChannels() {
        let storageData = this.getCachedData('channelsList');

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
}

export default CHANNELS_SERVICE
