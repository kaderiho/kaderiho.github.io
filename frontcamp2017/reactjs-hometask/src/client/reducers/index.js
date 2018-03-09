import { combineReducers } from 'redux';
import blogReducer from './blog';

const allReducer = combineReducers({
    blogs: blogReducer
});

export default allReducer;