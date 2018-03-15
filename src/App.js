import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Layout from "./components/Layout/Layout";
import {connect} from "react-redux";

class App extends Component {
    static propTypes = {
        fetchColors: PropTypes.func.isRequired
    };

    componentDidMount() {
        const {fetchColors} = this.props;

        fetchColors();

    }

    render() {
        return (
            <Layout/>
        );
    }
}

export {App};

export default connect(null, dispatch => ({
    fetchColors: dispatch.colors.fetchColors()
}))(App);
