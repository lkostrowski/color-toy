import React from 'react';
import PropTypes from 'prop-types';
import ColorList from '../ColorList/ColorList';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { IColor } from '../../models/Color.interface';
import { Headline, inputStyleOverrides, listStylesOverrides, Wrapper } from './ColorPicker.ui';

/**
 * Color picker component, containing headline, search input and colors list with button
 */
const ColorPicker = ({
    colors, onAccept, onColorSelected, selectedColor, onInputChange,
}) => (
    <Wrapper>
        <Headline>
            Pick your fancy color!
        </Headline>
        <Input
            className={inputStyleOverrides}
            onChange={onInputChange}
        />
        <ColorList
            className={listStylesOverrides}
            items={colors}
            onColorClicked={onColorSelected}
            selectedColor={selectedColor}
        />
        <Button onClick={onAccept}>Accept</Button>
    </Wrapper>
);

ColorPicker.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.shape({})),
    onAccept: PropTypes.func.isRequired,
    onColorSelected: PropTypes.func.isRequired,
    selectedColor: IColor,
    onInputChange: PropTypes.func.isRequired,
};

export default ColorPicker;
