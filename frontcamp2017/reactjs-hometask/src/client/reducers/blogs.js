const blogs = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return [...state, action.payLoad];
        case 'REMOVE_BLOG':
            return state.filter((blog) => blog.id != action.payLoad.id);
        default:
            return state;
    }
};

export default blogs;