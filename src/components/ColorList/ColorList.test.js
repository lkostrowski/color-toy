import ColorList from './ColorList';
import React from 'react';
import renderer from 'react-test-renderer';

describe('ColorList component', () => {
    it('render expected html', () => {
        const noop = () => {
        };
        const testColors = [
            {
                name: 'test-color1',
                hex: '#ffffff',
            },
            {
                name: 'test-color2',
                hex: '#000000',
            },
        ];
        const testActiveColor = testColors[0];


        const markup = renderer.create(<ColorList
            onColorClicked={noop}
            selectedColor={testActiveColor}
            items={testColors}
        />).toJSON();

        expect(markup).toMatchSnapshot();
    });
});
