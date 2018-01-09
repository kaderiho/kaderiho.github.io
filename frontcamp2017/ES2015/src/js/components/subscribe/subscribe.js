const closeSubscribeModal = function() {
    this.element.classList.add('subscribeContainer--hidden');
};

class Subscribe {
    constructor({ strategy, initElement }) {
        this.initElement = initElement;
        this.strategy = strategy;
        this.render();
        this._attachHandlers();
    }

    _attachHandlers() {
        this.subscribeSubmitButton.addEventListener('click', closeSubscribeModal.bind(this));
        this.subscribeCloseButton.addEventListener('click', closeSubscribeModal.bind(this));
    }

    _createElement() {
        this.element = document.createElement('div');
        this.element.className = 'subscribeContainer';
        return this;
    }

    _createElementHTML () {
        this.element.innerHTML = `<h1 class="subscribe-title">Subscribe To Our Newsletter</h1>
                                <p class="subscribe-description">Join our subscribers list to get the latest news (${this.strategy.subscriptionText})</p>
                                <input class="subscribe-input" type="text" placeholder="Enter your email here">
                                <button class="subscribe-submit btn">Subscribe</button>
                                <button class="subscribe-closeButton">x</button>`;
    }

    render() {
        this._createElement()._createElementHTML();

        this.subscribeCloseButton = this.element.querySelector('.subscribe-closeButton');
        this.subscribeSubmitButton = this.element.querySelector('.subscribe-submit');

        this.initElement.appendChild(this.element);
    }
}

class MonthlySubscribe {
    constructor() {
        this.subscription = 2;
        this.subscriptionText = 'every month';
    }
}
class WeeklySubscribe {
    constructor() {
        this.subscription = 1;
        this.subscriptionText = 'every week';
    }
}
class DailySubscribe {
    constructor() {
        this.subscription = 0;
        this.subscriptionText = 'every day';
    }
}

export { DailySubscribe, WeeklySubscribe, MonthlySubscribe };
export default Subscribe;
