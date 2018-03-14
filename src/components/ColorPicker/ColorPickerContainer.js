import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ColorPicker from './ColorPicker';
import {connect} from "react-redux";
import {IColor} from "../../models/colors";

class ColorPickerContainer extends Component {
    static defaultProps = {};
    static propTypes = {
        colors: PropTypes.arrayOf(IColor)
    };

    state = {
        selectedColor: undefined
    };

    onAcceptClick(e) {
        this.props.setActiveColor('#' + this.state.selectedColor.hex);
    }

    onColorSelected(color) {
        this.setState({
            selectedColor: color
        })
    }

    render() {
        return (
            <ColorPicker onColorSelected={color => this.onColorSelected(color)}
                         colors={this.props.colors}
                         selectedColor={this.state.selectedColor}
                         onAccept={e => this.onAcceptClick(e)}/>
        )
    }
}

export default connect(
    state => ({
        colors: state.colors.colorsList
    }), dispatch => ({
        setActiveColor: (color) => dispatch.colors.setActiveColor(color)
    }))(ColorPickerContainer);
