class EVENT_MANAGER {
    constructor() {
        if (EVENT_MANAGER.instance) {
            return EVENT_MANAGER.instance;
        }

        this.listeners = {};

        EVENT_MANAGER.instance = this;
    }

    publish({ type, eventData }) {
        let listeners = this.listeners[type];

        if (typeof listeners === 'undefined') {
            return false;
        }

        for (let i = 0, l = listeners.length;i < l;i++) {
            listeners[i](eventData);
        }
    }

    subscribe({ type, handler }) {
        let listeners = this.listeners;

        if (typeof listeners[type] === 'undefined') {
            listeners[type] = [];
        }


        // Prevent attaching the same handler
        let listenerExist = !!listeners[type].filter((listener) => ''+listener == ''+handler).length;

        if (listenerExist) {
            return;
        }

        listeners[type].push(handler);
    }

    unsubscribe({ type, handler }) {
        let listeners = this.listeners;

        if (typeof listeners[type] === 'undefined') {
            return false;
        }

        for (let i = 0, l = listeners[type].length;i < l;i++) {
            if (''+listeners[type][i] == ''+handler) {
                listeners[type].splice(i, 1);
                break;
            }
        }
    }
}

export default new EVENT_MANAGER();