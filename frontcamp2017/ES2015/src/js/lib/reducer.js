const InitialState = {
    selectedChannelArticles: {},
    isNavigationVisible: false,
    channels: [],
};

function Reducer(state = InitialState, action) {
    switch (action.type) {
        case 'CHANNELS_LIST_INIT':
            return Object.assign({}, state, {
                channels: action.channels
            });
        case 'ARTICLES_LIST_INIT':
            return Object.assign({}, state, {
                selectedChannelArticles: action.articles
            });
        case 'NAVIGATION_VISIBILITY':
            return Object.assign({}, state, {
                isNavigationVisible: action.isNavigationVisible
            });
        default:
            return state;
    }
}

export default Reducer;