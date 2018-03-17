import React from 'react';
import { connect } from 'react-redux';
import ColorPickerContainer from '../ColorPicker/ColorPickerContainer';
import { IColor } from '../../models/Color.interface';
import { ColorName, FloatingContainer, PageWrapper } from './Layout.ui';

/**
 * Page wrapper/layout structure
 */
const Layout = ({ activeColor }) => (
    <PageWrapper color={activeColor.hex}>
        <ColorName color={activeColor.hex}>
            {activeColor.name}
        </ColorName>
        <FloatingContainer>
            <ColorPickerContainer />
        </FloatingContainer>
    </PageWrapper>
);

Layout.propTypes = {
    activeColor: IColor,
};

export default connect(state => ({
    activeColor: state.activeColor,
}))(Layout);
