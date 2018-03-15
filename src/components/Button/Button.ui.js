import glamorous from "glamorous";
import colors from "../../colors";

export const ButtonWrapper = glamorous.button({
    background: colors.green,
    width: '100%',
    display: 'block',
    color: colors.light,
    height: '3rem',
    textTransform: 'uppercase',
    fontSize: '1.6rem',
    cursor: 'pointer',
    ':focus': {
        boxShadow: 'none',
        outline: 'none'
    }
});
