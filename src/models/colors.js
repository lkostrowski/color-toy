import ColorFetcher from '../services/ColorFetcher';
import {FETCH_STATES} from "../constants";

const fetcher = new ColorFetcher();

const colors = {
    state: {
        colorsList: [],
        fetchState: null,
    },
    reducers: {
        setFetchPending: (state) => ({...state, fetchState: FETCH_STATES.PENDING}),
        setFetchSuccess: (state, payload) => ({
            ...state,
            fetchState: FETCH_STATES.SUCCESS,
            colorsList: payload
        }),
        setFetchFailed: (state) => ({...state, fetchState: FETCH_STATES.FAIL}),
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

export default colors;
