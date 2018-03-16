import colorsModel from './colorsList';
import {FETCH_STATES} from "../constants";

describe('Colors List model', () => {
    it('Has default state', () => {
        expect(colorsModel.state.colorsList).toBeInstanceOf(Array);
        expect(colorsModel.state.fetchState).toBe(null);
    });

    it('Has reducer functions', () => {
        expect(typeof colorsModel.reducers.setFetchPending).toBe('function');
        expect(typeof colorsModel.reducers.setFetchSuccess).toBe('function');
        expect(typeof colorsModel.reducers.setFetchFailed).toBe('function');
    });

    it('Modify fetch state when mutation function called (pending)', () => {
        const prevState = {
            colorsList: [],
            fetchState: null,
        };

        const newState = colorsModel.reducers.setFetchPending(prevState);

        expect(newState.fetchState).toBe(FETCH_STATES.PENDING);
    });

    it('Modify fetch state when mutation function called (fail)', () => {
        const prevState = {
            colorsList: [],
            fetchState: null,
        };

        const newState = colorsModel.reducers.setFetchFailed(prevState);

        expect(newState.fetchState).toBe(FETCH_STATES.FAIL);
    });

    it('Modify fetch state when mutation function called (success) and pass proper data', () => {
        const prevState = {
            colorsList: [],
            fetchState: null,
        };

        const testColorsList = [
            {
                name: 'color1',
                hex: '#fff'
            },
            {
                name: 'color2',
                hex: '#000'
            }
        ];

        const newState = colorsModel.reducers.setFetchSuccess(prevState, testColorsList);

        expect(newState.fetchState).toBe(FETCH_STATES.SUCCESS);
        expect(newState.colorsList).toBe(testColorsList);
    });

});
