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
    this.element.querySelector('.subscribe-closeButton').addEventListener('click', closeSubscribeModal.bind(this));
    this.element.querySelector('.subscribe-submit').addEventListener('click', closeSubscribeModal.bind(this));
};

Subscribe.prototype.render = function() {
    this.element = document.createElement('div');
    this.element.className = 'subscribeContainer';
    this.element.innerHTML = `<h1>Subscribe on news</h1>
                                <input class="subscribe-input" type="text">
                                <button class="subscribe-submit btn">Subscribe</button>
                                <button class="subscribe-closeButton">x</button>`;

    this.initElement.appendChild(this.element);
};

class SubscribeStrategy {}
class MonthlySubscribe {}
class WeeklySubscribe {}
class DailySubscribe {}

MonthlySubscribe.prototype = Object.create(SubscribeStrategy.prototype);
MonthlySubscribe.prototype.subscription = 2; // every month;

WeeklySubscribe.prototype = Object.create(SubscribeStrategy.prototype);
WeeklySubscribe.prototype.subscription = 1; // every week;

DailySubscribe.prototype = Object.create(SubscribeStrategy.prototype);
DailySubscribe.prototype.subscription = 0; // every day;

export { DailySubscribe, WeeklySubscribe, MonthlySubscribe };
export default Subscribe;
