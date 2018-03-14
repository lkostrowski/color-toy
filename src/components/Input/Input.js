import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import colors from "../../colors";

const InputContainer = glamorous.input({
    display: 'block',
    width: '100%',
    height: '3rem',
    background: colors.light,
    outline: 'none',
    border: `1px solid ${colors.lightGray}`,
    fontSize: '1.8rem',
    color: colors.midGray,
    letterSpacing: '0.05em',
});

const Input = ({...rest}) => (
    <InputContainer {...rest} />
);

Input.propTypes = {}

export default Input;
