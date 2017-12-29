import Cache from '../services/CACHE_SERVICE';

export default function cacheDecorator(storeName) {
    return function(target){
        target.setCacheData = function(storeData) {
            Cache.setItem(storeName, storeData);
        };

        target.getCachedData = function(storeName, storeKey) {
            let cachedData = Cache.getItem(storeName);

            if (!cachedData) {
                return;
            }

            if (!storeKey) {
                return cachedData;
            }

            for (let i = 0;i < cachedData.length;i++) {
                if (cachedData[i].channelKey === storeKey) {
                    return cachedData[i];
                }
            }

            return false;
        };
    };
}