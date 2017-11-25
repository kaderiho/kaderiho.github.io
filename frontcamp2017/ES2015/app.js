(function(){
    let navigationControlsElement = document.querySelector('.navigationControls');
    let backHomeButton = document.querySelector('#backHomeButton');
    let mainElement = document.querySelector('main');

    /**
     * Basic config for Articles and Channels components
     * @type {{targetElement: Element}} - DOM entry point for initialize component
     */
    let channelsConfig = {
        targetElement: mainElement
    };

    let articlesConfig = {
        targetElement: mainElement,
        afterInserted() {
            navigationControlsElement.classList.remove('navigationControls--hidden');
        }
    };

    /**
     * Initialize Articles and Channels list components
     */
    new Channels(channelsConfig);
    new Articles(articlesConfig);

    backHomeButton.addEventListener('click',  function() {
        document.dispatchEvent(new CustomEvent('showSourcesList'));
        navigationControlsElement.classList.add('navigationControls--hidden');
    });
}());


