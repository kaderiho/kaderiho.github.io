const visibilityFilter = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_TEXT_FILTER':
            return action.filterText;
        default:
            return state;
    }
};

export default visibilityFilter;