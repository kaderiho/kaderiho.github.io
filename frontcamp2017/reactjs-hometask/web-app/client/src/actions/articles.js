import { ADD_ARTICLE, REMOVE_ARTICLE } from './types';

export const removeArticle = (article) => {
    return {
        type: REMOVE_ARTICLE,
        payLoad: article
    }
};

export const addArticle = (article) => {
    return {
        type: ADD_ARTICLE,
        payLoad: article
    }
};