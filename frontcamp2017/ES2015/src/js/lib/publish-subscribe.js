class EVENT_MANAGER {
    constructor() {
        if (EVENT_MANAGER.instance) {
            return EVENT_MANAGER.instance;
        }

        this.listeners = {};

        EVENT_MANAGER.instance = this;
    }

    publish({ type, eventData }) {
        if (typeof this.listeners[type] === 'undefined') {
            return false;
        }

        for (let i = 0, l = this.listeners[type].length;i < l;i++) {
            this.listeners[type][i](eventData);
        }
    }

    subscribe(subscriber) {
        if (typeof this.listeners[subscriber.type] === 'undefined') {
            this.listeners[subscriber.type] = [];
        }

        let listenerExist = !!this.listeners[subscriber.type].filter((listener) => ''+listener == ''+subscriber.handler).length;

        if (listenerExist) {
            return;
        }

        this.listeners[subscriber.type].push(subscriber.handler);
    }

    unsubscribe(subscriber) {
        if (typeof this.listeners[subscriber.type] === 'undefined') {
            return false;
        }

        for (let i = 0, l = this.listeners[subscriber.type].length;i < l;i++) {
            if (this.listeners[subscriber.type][i] === subscriber.type) {
                this.listeners[subscriber.type].splice(i, 1);
                break;
            }
        }
    }
}

export default new EVENT_MANAGER();