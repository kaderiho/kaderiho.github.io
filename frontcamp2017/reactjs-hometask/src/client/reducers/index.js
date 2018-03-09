import { combineReducers } from 'redux';
import blogsReducer from './blogs';

const allReducer = combineReducers({
    blogs: blogsReducer
});

export default allReducer;