import { createSelector } from 'reselect';

const colorsList = state => state.colorsList.colorsList;
const searchQuery = state => state.autosuggest.searchQuery;

const limit = 10;
const minimumChars = 2;

export const getVisibleColors = createSelector(
    [colorsList, searchQuery],
    (colors, query) => {
        const suggestionFilter = color => color.hex.includes(query) || color.name.includes(query);

        return query.length <= minimumChars
            ? [...colors].slice(0, limit)
            : [...colors]
                .filter(suggestionFilter)
                .slice(0, limit);
    },
);
