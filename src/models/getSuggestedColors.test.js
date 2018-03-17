import { getVisibleColors } from './getSuggestedColors';

describe('Suggested/filtered colors selector', () => {
    const state = {
        colorsList: {
            colorsList: [],
        },
        autosuggest: {
            searchQuery: '',
        },
    };

    for (let i = 0; i <= 20; i++) {
        state.colorsList.colorsList.push({
            name: `color${i}`,
            hex: '#000000',
        });
    }

    it('Returns first 10 items if search query < 2', () => {
        state.autosuggest.searchQuery = '';

        const results = getVisibleColors(state);

        expect(results.length).toBe(10);
    });

    it('Returns filtered element', () => {
        const newState = { ...state };
        newState.autosuggest.searchQuery = 'color11';

        const results = getVisibleColors(newState);

        expect(results.length).toBe(1);
        expect(results[0].name).toBe('color11');
    });
});
