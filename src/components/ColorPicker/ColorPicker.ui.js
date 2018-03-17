import { rgba } from 'polished';
import glamorous from 'glamorous/';
import colors from '../../colors';
import { css } from 'glamor';

export const Wrapper = glamorous.div({
    background: `linear-gradient(to bottom, ${colors.light}, ${rgba(colors.light, 0.6)})`,
    padding: '1rem',
    height: '100%',
    minHeight: '40rem',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: `3px 3px 20px 3px ${rgba(colors.darkGray, 0.2)}`,
});

export const Headline = glamorous.h1({
    fontWeight: '300',
    color: colors.midGray,
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: '0.05em',
    marginBottom: '2rem',
});

export const inputStyleOverrides = css({
    textTransform: 'uppercase',
});

export const listStylesOverrides = css({
    margin: '2rem 0 auto 0',
});
