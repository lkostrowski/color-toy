import React from 'react';
import PropTypes from 'prop-types';
import {IColor} from "../../models/Color.interface";
import {ColorLabel, ColorThumb, Item, List} from "./ColorList.ui";

/**
 *Colors list with color thumbnail and label
 */
const ColorList = ({items, selectedColor = {}, onColorClicked, ...p}) => (
    <List {...p}>
        {items.map(color => (
            <Item onClick={() => onColorClicked(color)}
                  key={color.name}
                  color={color.hex}
                  active={color.name === selectedColor.name}
            >
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
