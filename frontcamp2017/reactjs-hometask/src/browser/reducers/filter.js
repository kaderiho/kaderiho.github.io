const visibilityFilter = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_TEXT_FILTER':
            console.log(action);

            return action.filterText;
        default:
            return state;
    }
};

export default visibilityFilter;