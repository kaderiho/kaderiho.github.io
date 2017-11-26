(function(){
    let navigationControlsElement = document.querySelector('.navigationControls');
    let backHomeButton = document.querySelector('#backHomeButton');
    let scrollUpButton = document.querySelector('#scrollUpButton');
    let mainElement = document.querySelector('main');

    // Basic config for Articles and Channels components
    let channelsConfig = {
        targetElement: mainElement
    };

    let articlesConfig = {
        targetElement: mainElement,
        afterInserted() {
            navigationControlsElement.classList.remove('navigationControls--hidden');
            backHomeButton.classList.remove('navigationControls-button--hidden');
        },
        step: 5
    };

    // Initialize Articles and Channels list components
    new Channels(channelsConfig);
    new Articles(articlesConfig);

    backHomeButton.addEventListener('click',  function() {
        document.dispatchEvent(new CustomEvent('showSourcesList'));
        navigationControlsElement.classList.add('navigationControls--hidden');
    });

    scrollUpButton.addEventListener('click',  function() {
        window.scrollTo(0, 0);
    });

    document.addEventListener('scroll', () => {
        window.pageYOffset > 500 ? scrollUpButton.classList.remove('navigationControls-button--hidden') : scrollUpButton.classList.add('navigationControls-button--hidden')
    });
}());


