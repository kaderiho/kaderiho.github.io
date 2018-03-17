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
        return axios.post('/articles/api', blog).then((article) => {
            console.log(article);
        }, (err) => {

        })
    };

    // return {
    //     type: 'ADD_BLOG',
    //     payLoad: article
    // }
};