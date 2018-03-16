import flashMessages from './flash-messages';
import { combineReducers } from 'redux';
import visibilityFilter from './filter';
import blogs from './blogs';

export default combineReducers({
    visibilityFilter,
    flashMessages,
    blogs
});