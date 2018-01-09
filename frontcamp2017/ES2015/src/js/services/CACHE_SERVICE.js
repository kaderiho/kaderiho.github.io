/**
 * Singleton object that provide possibility write/read data from cache (localStorage)
 */
class Cache {
    constructor() {
        if (!Cache.instance) {
            Cache.instance = this;
        }

        return Cache.instance;
    }

    getItem(itemName) {
        return JSON.parse(localStorage.getItem(itemName));
    }

    /**
     * Composite method that able to set single item or list of items to the cache store
     * @param itemName {string} - the name of store in cache
     * @param data - the stored data
     */
    setItem (itemName, data) {
        let cache = this.getItem(itemName);
        let outputData = [];

        // Check if store wasn't created for this item
        if (!cache) {
            cache = [];
        }

        if (Object.prototype.toString.call(data) !== '[object Array]') {
            outputData.push(data);
        } else {
            outputData = outputData.concat(data);
        }

        localStorage.setItem(itemName, JSON.stringify(cache.concat(outputData)));
    }
}

export default new Cache();