(function() {
    let backHomeButton = document.querySelector('#backHomeButton');
    let channelsConfig = {
        targetElement: document.querySelector('main')
    };

    let articlesConfig = {
        targetElement: document.querySelector('main'),
        afterInserted() {
            backHomeButton.classList.remove('navigationControls-button--hidden');
        }
    };

    new Channels(channelsConfig);
    new Articles(articlesConfig);

    backHomeButton.addEventListener('click',  function() {
        document.dispatchEvent(new CustomEvent('showSourcesList'));
        this.classList.add('navigationControls-button--hidden');
    });
}());
