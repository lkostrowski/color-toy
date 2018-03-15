import React from 'react';
import PropTypes from 'prop-types';
import {ButtonWrapper} from "./Button.ui";

/**
 * Standard button component
 */
const Button = ({children, ...props}) => (
    <ButtonWrapper {...props}>
        {children}
    </ButtonWrapper>
);

Button.propTypes = {
    children: PropTypes.any
};

export default Button;
