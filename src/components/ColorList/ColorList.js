import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {IColor} from "../../models/colors";

const List = glamorous.ul({
    margin: 0,
    padding: 0,
    listStyle: 'none',
});

const Item = glamorous.li({
        display: 'flex',
        alignItems: 'center',
        height: '2rem',
        padding: '1rem',
        margin: 0,
        border: '2px solid transparent',
        cursor: 'pointer',
    },
    p => ({
        borderColor: p.active && `#${p.color}`
    }));

const ColorThumb = glamorous.div({
        width: '1rem',
        height: '1rem',
        marginRight: '1rem'
    },
    p => ({
        background: `#${p.color}`
    }));

const ColorLabel = glamorous.span({});

const ColorList = ({items, selectedColor = {}, onColorClicked}) => (
    <List>
        {items.map(color => (
            <Item onClick={() => onColorClicked(color)}
                  key={color.name}
                  color={color.hex}
                  active={color.name === selectedColor.name}>
                <ColorThumb color={color.hex}/>
                <ColorLabel>{color.name}</ColorLabel>
            </Item>
        ))}
    </List>
);

ColorList.propTypes = {
    items: PropTypes.arrayOf(IColor),
    selectedColor: IColor,
    onColorClicked: PropTypes.func.isRequired
};

export default ColorList;
