import colorsModel from './activeColor';

describe('Active color model', () => {
    it('Has default state', () => {
        expect(colorsModel.state.name).toBe('');
        expect(colorsModel.state.hex).toBe('#fff');
    });

    it('Has reducer function', () => {
        expect(typeof colorsModel.reducers.setActiveColor).toBe('function');
    });

    it('Modifies state after mutate function called', () => {
        const prevState = {
            name: '',
            hex: '#fff'
        };

        const newState = colorsModel.reducers.setActiveColor(prevState, {name: 'test-name', hex: 'test-hex'});

        expect(newState.name).toBe('test-name');
        expect(newState.hex).toBe('test-hex');
    });
});
