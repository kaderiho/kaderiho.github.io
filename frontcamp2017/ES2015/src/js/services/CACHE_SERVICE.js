class Cache {
    constructor() {
        if (!Cache.instance) {
            Cache.instance = this;
        }

        return Cache.instance;
    }
}

Cache.prototype.getItem = function(itemName) {
    return JSON.parse(localStorage.getItem(itemName));
};

Cache.prototype.setItem = function(itemName, dataList) {
    localStorage.setItem(itemName, JSON.stringify(dataList));
};

export default new Cache();