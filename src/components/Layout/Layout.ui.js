import {rgba} from "polished/lib/index";
import glamorous from "glamorous";

export const PageWrapper = glamorous.div({
        width: '100vw',
        height: '100vh',
        position: 'relative',
        transition: 'background-color 0.2s'
    },
    props => ({
        backgroundColor: rgba(props.color, 0.5)
    })
);

export const FloatingContainer = glamorous.aside({
    position: 'absolute',
    width: '30rem',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '8rem'
});

export const ColorName = glamorous.span({
        margin: '2rem',
        fontSize: '5rem'
    },
    props => ({
        color: rgba(props.color, 0.5)
    })
);
