import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ColorPicker from './ColorPicker';
import {connect} from "react-redux";
import {getVisibleColors, IColor} from "../../models/colors";

class ColorPickerContainer extends Component {
    static defaultProps = {};
    static propTypes = {
        colors: PropTypes.arrayOf(IColor),
        updateSearchQuery: PropTypes.func.isRequired,
        setActiveColor: PropTypes.func.isRequired,
    };

    state = {
        selectedColor: {}
    };

    onAcceptClick(e) {
        if (!this.state.selectedColor) return;
        this.props.setActiveColor(this.state.selectedColor);
    }

    onColorSelected(color) {
        this.setState({
            selectedColor: color
        })
    }

    onInputChange(query) {
        this.props.updateSearchQuery(query)
    }

    render() {
        return (
            <ColorPicker onColorSelected={color => this.onColorSelected(color)}
                         colors={this.props.colors}
                         selectedColor={this.state.selectedColor}
                         onInputChange={e => this.onInputChange(e.target.value)}
                         onAccept={e => this.onAcceptClick(e)}/>
        )
    }
}

export default connect(
    state => ({
        colors: getVisibleColors(state)
    }), dispatch => ({
        setActiveColor: color => dispatch.colors.setActiveColor(color),
        updateSearchQuery: query => dispatch.colors.updateSearchQuery(query)
    }))(ColorPickerContainer);
