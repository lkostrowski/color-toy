import { store } from './store';

describe('Store', () => {
    it('Is initialized and has dispatch', () => {
        expect(store.dispatch).toBeTruthy();
    });
});
