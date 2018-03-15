import glamorous from "glamorous";
import colors from "../../colors";

export const InputContainer = glamorous.input({
    display: 'block',
    width: '100%',
    height: '3rem',
    background: colors.white,
    outline: 'none',
    border: `1px solid ${colors.lightGray}`,
    fontSize: '1.8rem',
    color: colors.midGray,
    letterSpacing: '0.05em',
    padding: '0 1rem'
});
