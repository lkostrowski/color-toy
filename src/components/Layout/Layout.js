import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import glamorous from 'glamorous';
import {rgba} from "polished";
import ColorPickerContainer from "../ColorPicker/ColorPickerContainer";
import {IColor} from "../../models/colors";

const PageWrapper = glamorous.div({
        width: '100vw',
        height: '100vh',
        position: 'relative',
        transition: 'background-color 0.2s'
    },
    props => ({
        backgroundColor: rgba(props.color, 0.5)
    }));

const FloatingContainer = glamorous.aside({
    position: 'absolute',
    width: '30rem',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '8rem'
});

const ColorName = glamorous.span({
    margin: '2rem',
    fontSize: '5rem'
}, p => ({
    color: rgba(p.color, 0.5)
}));

const Layout = ({activeColor}) => (
    <PageWrapper color={activeColor.hex}>
        <ColorName color={activeColor.hex}>
            {activeColor.name}
        </ColorName>
        <FloatingContainer>
            <ColorPickerContainer/>
        </FloatingContainer>
    </PageWrapper>
);

Layout.propTypes = {
    activeColor: IColor
};

export default connect(state => ({
    colors: state.colors.colorsList,
    activeColor: state.colors.activeColor
}))(Layout);
