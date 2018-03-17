// import { ADD_ARTICLE } from './types';
import axios from 'axios';

export const removeBlog = (blog) => {
    return {
        type: 'REMOVE_BLOG',
        payLoad: blog
    }
};

export const addBlog = (blog) => {
    return dispatch => {
        return axios.post('/articles', blog)
    };


    // return {
    //     type: 'ADD_BLOG',
    //     payLoad: blog
    // }
};