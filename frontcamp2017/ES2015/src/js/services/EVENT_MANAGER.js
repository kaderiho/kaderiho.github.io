/**
 * The implementation of publish/subscribe pattern
 */
class EVENT_MANAGER {
    constructor() {
        if (EVENT_MANAGER.instance) {
            return EVENT_MANAGER.instance;
        }

        EVENT_MANAGER.instance = this;

        this.subscribers = {};
    }
}

EVENT_MANAGER.prototype.subscribe = function(type, fn) {
    if (!this.subscribers[type]) {
        this.subscribers[type] = [];
    }

    if (this.subscribers[type].indexOf(fn) == -1) {
        this.subscribers[type].push(fn);
    }
};

EVENT_MANAGER.prototype.unsubscribe = function(type, fn) {
    let listeners = this.subscribers[type];

    if (!listeners) {
        return;
    }

    let index = listeners.indexOf(fn);
    if (index > -1) {
        listeners.splice(index, 1);
    }
};

EVENT_MANAGER.prototype.publish = function(type, eventObj) {
    if (!this.subscribers[type]) {
        return;
    }

    if (eventObj && !eventObj.type) {
        eventObj.type = type;
    }

    let listeners = this.subscribers[type];

    for (let i = 0, l = listeners.length;i < l;i++) {
        listeners[i](eventObj);
    }
};

export default new EVENT_MANAGER();