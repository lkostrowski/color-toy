import ColorPickerContainer from './ColorPickerContainer';
import React from 'react';
import {mount} from 'enzyme';
import {store} from '../../models/store';

describe('ColorPicker container', () => {
    const props = {
        colors: [
            {name: 'test-color1', hex: '#fff'},{name: 'test-color2', hex: '#000'}
        ],
        updateSearchQuery: () => {},
        setActiveColor: () => {}
    };

    it('renders without failing', () => {
        const mounted = jest.spyOn(ColorPickerContainer.prototype, 'componentDidMount');
        mount(<ColorPickerContainer {...props} store={store} />);
        expect(mounted).toHaveBeenCalled();
    });
});
