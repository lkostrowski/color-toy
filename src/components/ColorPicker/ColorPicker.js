import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous';
import {rgba} from 'polished';
import {css} from 'glamor';
import colors from "../../colors";
import ColorList from "../ColorList/ColorList";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {IColor} from "../../models/colors";

const Wrapper = glamorous.div({
    background: `linear-gradient(to bottom, ${colors.light}, ${rgba(colors.light, 0.6)})`,
    padding: '1rem',
    boxShadow: `3px 3px 20px 3px ${rgba(colors.darkGray, 0.2)}`
});

const Headline = glamorous.h1({
    fontWeight: '300',
    color: colors.midGray,
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: '0.05em',
    marginBottom: '2rem'
});

const inputStyleOverrides = css({
    textTransform: 'uppercase'
});

const listStylesOverrides = css({
    margin: '2rem 0'
})

const ColorPicker = ({colors, onAccept, onColorSelected, selectedColor}) => (
    <Wrapper>
        <Headline>
            Pick your fancy color!
        </Headline>
        <Input className={inputStyleOverrides}/>
        <ColorList className={listStylesOverrides} items={colors} onColorClicked={onColorSelected} selectedColor={selectedColor}/>
        <Button onClick={onAccept}>Accept</Button>
    </Wrapper>
);

ColorPicker.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.shape({})),
    onAccept: PropTypes.func.isRequired,
    onColorSelected: PropTypes.func.isRequired,
    selectedColor: IColor
};

export default ColorPicker
