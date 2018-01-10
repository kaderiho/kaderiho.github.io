const InitialState = {
    selectedChannelArticles: {},
    isNavigationVisible: false,
    channels: [],
};

const ACTION_TYPES = ['CHANNELS_LIST_INIT', 'ARTICLES_LIST_INIT', 'NAVIGATION_VISIBILITY'];

function NewsApp(state = InitialState, action) {
    switch (action.type) {
        case ACTION_TYPES[0]:
            return Object.assign({}, state, {
                channels: action.channels
            });
        case ACTION_TYPES[1]:
            return Object.assign({}, state, {
                selectedChannelArticles: action.articles
            });
        case ACTION_TYPES[2]:
            return Object.assign({}, state, {
                isNavigationVisible: action.isNavigationVisible
            });
        default:
            return state;
    }
}

export default NewsApp;