import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';

class App extends Component {
    static propTypes = {
        fetchColors: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { fetchColors } = this.props;

        fetchColors();
    }

    render() {
        return (
            <Layout />
        );
    }
}

export { App };

export default connect(null, dispatch => ({
    fetchColors: dispatch.colorsList.fetchColors,
}))(App);
