export default {
    state: {
        searchQuery: '',
    },
    reducers: {
        updateSearchQuery: (state, query) => ({ ...state, searchQuery: query }),
    },
};
