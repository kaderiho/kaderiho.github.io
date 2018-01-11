class Control {
    constructor() {}

    static createControl(name) {
        if (name === 'comment') {
            return new commentControl({});
        } else if (name === 'print') {
            return new printControl({});
        }
    }

    render() {
        this.button = document.createElement('button');
        this.button.className = 'btn';
        this.button.innerText = this.controlText;
        this.button.addEventListener('click', this.handler);
    }
}

class commentControl extends Control {
    constructor({ controlText = 'Add a comment' }) {
        super();
        this.controlText = controlText;
        this.render();
    }

    handler() {
        // Add a comment to the article
        // TODO: comment component will be implemented in the future
    }
}

class printControl extends Control {
    constructor({ controlText = 'Print' }) {
        super();
        this.controlText = controlText;
        this.render();
    }

    handler() {
        // Prepare article to the print
        // TODO: print functionality will be implemented in the future
    }
}

export default Control;