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
    this.element.innerHTML = `<h1>Subscribe To Our Newsletter</h1>
                                <input class="subscribe-input" type="text" placeholder="Enter your email here">
                                <button class="subscribe-submit btn">Subscribe</button>
                                <button class="subscribe-closeButton">x</button>`;

    this.initElement.appendChild(this.element);
};

class SubscribeStrategy {}
class MonthlySubscribe {}
class WeeklySubscribe {}
class DailySubscribe {}

MonthlySubscribe.prototype = Object.create(SubscribeStrategy.prototype);
MonthlySubscribe.prototype.subscription = 2; // get newsletter every month;

WeeklySubscribe.prototype = Object.create(SubscribeStrategy.prototype);
WeeklySubscribe.prototype.subscription = 1; // get newsletter every week;

DailySubscribe.prototype = Object.create(SubscribeStrategy.prototype);
DailySubscribe.prototype.subscription = 0; // get newsletter every day;

export { DailySubscribe, WeeklySubscribe, MonthlySubscribe };
export default Subscribe;
