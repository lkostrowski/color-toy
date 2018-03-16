import Input from './Input';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Input component', () => {
    it('render expected html', () => {
        const markup = renderer.create(
            <Input type="text"/>
        ).toJSON();

        expect(markup).toMatchSnapshot();
    });
});
