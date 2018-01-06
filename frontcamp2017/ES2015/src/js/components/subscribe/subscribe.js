class Subscribe {
    constructor({ strategy, initElement }) {
        this.initElement = initElement;
        this.strategy = strategy;
        this.render();
        this._attachHandlers();
    }
}

const closeSubscribeModal = function() {
    this.element.classList.add('subscribeContainer--hidden');
};

Subscribe.prototype._attachHandlers = function() {
    this.subscribeSubmitButton.addEventListener('click', closeSubscribeModal.bind(this));
    this.subscribeCloseButton.addEventListener('click', closeSubscribeModal.bind(this));
};

Subscribe.prototype._createElement = function () {
    this.element = document.createElement('div');
    this.element.className = 'subscribeContainer';
    return this;
};

Subscribe.prototype._createElementHTML = function() {
    this.element.innerHTML = `<h1 class="subscribe-title">Subscribe To Our Newsletter</h1>
                                <p class="subscribe-description">Join our subscribers list to get the latest news (${this.strategy.subscriptionText})</p>
                                <input class="subscribe-input" type="text" placeholder="Enter your email here">
                                <button class="subscribe-submit btn">Subscribe</button>
                                <button class="subscribe-closeButton">x</button>`;
};

Subscribe.prototype.render = function() {
    this._createElement()._createElementHTML();

    this.subscribeCloseButton = this.element.querySelector('.subscribe-closeButton');
    this.subscribeSubmitButton = this.element.querySelector('.subscribe-submit');

    this.initElement.appendChild(this.element);
};

class SubscribeStrategy {}
class MonthlySubscribe {}
class WeeklySubscribe {}
class DailySubscribe {}

MonthlySubscribe.prototype = Object.create(SubscribeStrategy.prototype);
MonthlySubscribe.prototype.subscription = 2; // get newsletter every month;
MonthlySubscribe.prototype.subscriptionText = 'every month'; // get newsletter every month;

WeeklySubscribe.prototype = Object.create(SubscribeStrategy.prototype);
WeeklySubscribe.prototype.subscription = 1; // get newsletter every week;
WeeklySubscribe.prototype.subscriptionText = 'every week'; // get newsletter every week;

DailySubscribe.prototype = Object.create(SubscribeStrategy.prototype);
DailySubscribe.prototype.subscription = 0; // get newsletter every day;
DailySubscribe.prototype.subscriptionText = 'every day'; // get newsletter every day;

export { DailySubscribe, WeeklySubscribe, MonthlySubscribe };
export default Subscribe;
