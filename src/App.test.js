import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

it('renders without crashing', () => {
    const noop = () => {
    };
    shallow(<App fetchColors={noop} />);
});

it('run fetch colors action when mounted', (done) => {
    const fetchColorsMock = () => {
        done();
    };
    shallow(<App fetchColors={fetchColorsMock} />);
});
