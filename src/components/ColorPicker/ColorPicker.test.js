import ColorPicker from './ColorPicker';
import React from 'react';
import renderer from 'react-test-renderer';

describe('ColorPicker component', () => {
    it('render expected html', () => {
        const noop = () => {
        };
        const testColors = [
            {
                name: 'test-color1',
                hex: '#ffffff'
            },
            {
                name: 'test-color2',
                hex: '#000000'
            }
        ];
        const testActiveColor = testColors[0];


        const markup = renderer.create(
            <ColorPicker onColorSelected={noop} onAccept={noop} onInputChange={noop}
                         selectedColor={testActiveColor} colors={testColors}/>
        ).toJSON();

        expect(markup).toMatchSnapshot();
    });
});
