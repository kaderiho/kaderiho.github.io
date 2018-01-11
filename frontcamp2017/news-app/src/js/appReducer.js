import actionTypes from 'js/constants/action-types';

const InitialState = {
    selectedChannelArticles: {},
    isNavigationVisible: false,
    channels: [],
};

function NewsApp(state = InitialState, action) {
    switch (action.type) {
        case actionTypes.CHANNELS_LIST_INIT:
            return Object.assign({}, state, {
                channels: action.channels
            });
        case actionTypes.ARTICLES_LIST_INIT:
            return Object.assign({}, state, {
                selectedChannelArticles: action.articles
            });
        case actionTypes.NAVIGATION_VISIBILITY:
            return Object.assign({}, state, {
                isNavigationVisible: action.isNavigationVisible
            });
        default:
            return state;
    }
}

export default NewsApp;