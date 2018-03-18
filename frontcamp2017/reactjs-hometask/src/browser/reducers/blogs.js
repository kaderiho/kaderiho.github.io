import { ADD_ARTICLE, REMOVE_ARTICLE } from '../actions/types';

const blogs = (state = [], action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return [...state, action.payLoad];
        case REMOVE_ARTICLE:
            return state.filter((article) => article.id != action.payLoad.id);
        default:
            return state;
    }
};

export default blogs;