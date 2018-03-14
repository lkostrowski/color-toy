import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import glamorous from 'glamorous';
import ColorPicker from "../ColorPicker/ColorPicker";

const PageWrapper = glamorous.div({
        width: '100vw',
        height: '100vh',
        position: 'relative'
    },
    props => ({
        backgroundColor: props.color
    }));

const FloatingContainer = glamorous.aside({
    position: 'absolute',
    height: 'calc(100vh - 4rem)',
    width: '20rem',
    top: '4rem',
    right: '8rem'
});

const Layout = ({activeColor}) => (
    <PageWrapper color={activeColor}>
        <FloatingContainer>
            <ColorPicker/>
        </FloatingContainer>
    </PageWrapper>
);

Layout.propTypes = {
    activeColor: PropTypes.string
};

export default connect(state => ({
    colors: state.colors.colorsList,
    activeColor: state.colors.activeColor
}))(Layout);
