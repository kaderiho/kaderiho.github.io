const Cache = require('../src/js/services/CACHE_SERVICE').default;
let localStorage = require('mock-local-storage');

describe('Cache service', () => {

    beforeEach(() => {
        global.window = {};
        window.localStorage = global.localStorage;
    });

    it('Cache service is a singleton: ', () => {
        expect(new Cache.constructor()).toBe(Cache.constructor.instance);
    });

    it('Cache.setItem: ', () => {
        let storedData = {channelKey: 'someChannelKey', articles: [{ id: 1, title: 'Article title', description: 'Article description' }]};

        Cache.setItem('articlesList', storedData);
        expect(Cache.getItem('articlesList')).toEqual([storedData]);
    });

    it('Cache.setItem: updateList', () => {
        let storedData = { id: 1, title: 'Article title', description: 'Article description' };

        expect(Cache.constructor.updateList(storedData)).toEqual([storedData]);
    });

    it('Cache.setItem: updateList', () => {
        let storedData = { id: 1, title: 'Article title', description: 'Article description' };

        expect(Cache.constructor.updateList([storedData])).toEqual([storedData]);
    });
});
