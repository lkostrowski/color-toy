import Button from './Button';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Button component', () => {
    it('render expected html', () => {
        const markup = renderer.create(
            <Button>Test</Button>
        ).toJSON();

        expect(markup).toMatchSnapshot();
    });
});
