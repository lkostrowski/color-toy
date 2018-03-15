import PropTypes from 'prop-types';
import ColorFetcher from '../services/ColorFetcher';
import {FETCH_STATES} from "../constants";
import {createSelector} from "reselect";

const fetcher = new ColorFetcher();

const colors = {
    name: 'colors',
    state: {
        colorsList: [],
        activeColor: '#fff',
        fetchState: null,
        searchQuery: '',
    },
    reducers: {
        setFetchPending: (state) => ({...state, fetchState: FETCH_STATES.PENDING}),
        setFetchSuccess: (state, payload) => ({
            ...state,
            fetchState: FETCH_STATES.SUCCESS,
            colorsList: payload
        }),
        setFetchFailed: (state) => ({...state, fetchState: FETCH_STATES.FAIL}),
        setActiveColor: (state, color) => ({
            ...state,
            activeColor: color
        })

    },
    effects: {
        async fetchColors() {
            this.setFetchPending();

            try {
                const colors = await fetcher.getColors();
                this.setFetchSuccess(colors);

            } catch (err) {
                this.setFetchFailed();
            }
        }
    },
};

const colorsList = state => state.colors.colorsList;
const searchQuery = state => state.colors.searchQuery;

export const getVisibleColors = createSelector(
    [colorsList, searchQuery], (colors, query) => {
        if (query.length < 3) {
            return [...colors].slice(0, 10)
        } else {
            return [...colors].filter(color => {
                return color.hex.contains(query) || color.name.contains(query);
            }).slice(0, 10);
        }
    }
);

const IColor = PropTypes.shape({
    hex: PropTypes.string,
    name: PropTypes.string
});

export {IColor};

export default colors;
