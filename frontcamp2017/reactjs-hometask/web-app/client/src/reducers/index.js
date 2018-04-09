import flashMessages from './flash-messages';
import { combineReducers } from 'redux';
import visibilityFilter from './filter';
import articles from './articles';
import auth from './auth';

export default combineReducers({
    visibilityFilter,
    flashMessages,
    articles,
    auth
});