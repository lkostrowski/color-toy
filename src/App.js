import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Layout from "./components/Layout/Layout";
import {connect} from "react-redux";

class App extends Component {
    static propTypes = {
        dispatch: PropTypes.func
    };

    componentDidMount() {
        const {dispatch} = this.props;

        dispatch.colors.fetchColors();
    }

    render() {
        return (
            <Layout/>
        );
    }
}

export default connect()(App);
