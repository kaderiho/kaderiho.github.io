export const removeBlog = (blog) => {
    return {
        type: 'REMOVE_BLOG',
        payLoad: blog
    }
};

export const addBlog = (blog) => {
    return {
        type: 'ADD_BLOG',
        payLoad: blog
    }
};

export const visibilityFilter = (filterText) => {
    return {
        type: 'SEARCH_TEXT_FILTER',
        filterText
    }
};