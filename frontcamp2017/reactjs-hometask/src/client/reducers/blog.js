const INITIAL_STATE = [
    {
        id: 0,
        date: new Date(),
        author: 'Ivanov I 1',
        text: 'Some blog text there'
    },
    {
        id: 1,
        date: new Date(),
        author: 'Ivanov I 2',
        text: 'Some blog text there'
    },
    {
        id: 2,
        date: new Date(),
        author: 'Ivanov I 3',
        text: 'Some blog text there'
    },
    {
        id: 3,
        date: new Date(),
        author: 'Ivanov I 4',
        text: 'Some blog text there'
    }
];

const blogs = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            break;
        case 'REMOVE_BLOG':
            return state.filter((blog) => blog.id != action.payLoad.id);
        default:
            return state;
    }
};

export default blogs;