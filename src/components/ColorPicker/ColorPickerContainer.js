import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ColorPicker from './ColorPicker';
import {connect} from "react-redux";
import {IColor} from "../../models/Color.interface";
import {getVisibleColors} from "../../models/getSuggestedColors";

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

    /**
     * Autobind decorator could be useful
     */
    constructor() {
        super();
        this.onColorSelected = this.onColorSelected.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onAcceptClick = this.onAcceptClick.bind(this);
    }

    onAcceptClick() {
        if (!this.state.selectedColor) return;
        if (this.props.activeColor.name === this.state.selectedColor.name) return;

        this.props.setActiveColor(this.state.selectedColor);
    }

    onColorSelected(color) {
        this.setState({
            selectedColor: color
        })
    }

    onInputChange(e) {
        const query = e.target.value;
        this.props.updateSearchQuery(query);
    }

    render() {
        const {colors} = this.props;
        const {selectedColor} = this.state;

        return (
            <ColorPicker onColorSelected={this.onColorSelected}
                         colors={colors}
                         selectedColor={selectedColor}
                         onInputChange={this.onInputChange}
                         onAccept={this.onAcceptClick}
            />
        );
    }
}

const mapState = state => ({
    colors: getVisibleColors(state),
    activeColor: state.activeColor
});

const mapDispatch = dispatch => ({
    setActiveColor: color => dispatch.activeColor.setActiveColor(color),
    updateSearchQuery: query => dispatch.autosuggest.updateSearchQuery(query)
});

export default connect(mapState, mapDispatch)(ColorPickerContainer);
