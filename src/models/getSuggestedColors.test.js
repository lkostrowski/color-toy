import {getVisibleColors} from './getSuggestedColors';

describe('Suggested/filtered colors selector', function () {
    let state = {
        colors: {
            colorsList: []
        },
        autosuggest: {
            searchQuery: ''
        }
    };

    for (let i = 0; i <= 20; i++) {
        state.colors.colorsList.push({
            name: `color${i}`,
            hex: '#000000'
        })
    }

    it('Returns first 10 items if search query < 2', () => {
        state.autosuggest.searchQuery = '';

        const results = getVisibleColors(state);

        expect(results.length).toBe(10);
    });

    it.skip('Returns filtered element', () => {
        const newState = {...state};
        newState.autosuggest.searchQuery = 'color1';

        const results = getVisibleColors(newState);

        console.log(results)

        expect(results.length).toBe(1);
        expect(results[0].name).toBe('color1');
    })
});
