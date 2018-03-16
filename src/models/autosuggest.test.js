import autosuggestModel from './autosuggest';

describe('Active color model', () => {
    it('Has default state', () => {
        expect(autosuggestModel.state.searchQuery).toBe('');
    });

    it('Has reducer function', () => {
        expect(typeof autosuggestModel.reducers.updateSearchQuery).toBe('function');
    });

    it('Modifies state after mutate function called', () => {
        const prevState = {
            searchQuery: ''
        };

        const newState = autosuggestModel.reducers.updateSearchQuery(prevState, 'test');

        expect(newState.searchQuery).toBe('test');
    });
});
