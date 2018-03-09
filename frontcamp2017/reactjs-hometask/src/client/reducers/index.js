import { combineReducers } from 'redux';
import visibilityFilter from './filter';
import blogs from './blogs';

const allReducer = combineReducers({
    visibilityFilter,
    blogs
});

export default allReducer;