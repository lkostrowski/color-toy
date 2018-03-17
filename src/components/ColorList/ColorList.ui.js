import glamorous from 'glamorous';

export const List = glamorous.ul({
    margin: 0,
    padding: 0,
    listStyle: 'none',
});

export const Item = glamorous.li(
    {
        display: 'flex',
        alignItems: 'center',
        height: '2rem',
        padding: '1rem',
        margin: 0,
        border: '2px solid transparent',
        cursor: 'pointer',
    },
    p => ({
        borderColor: p.active && p.color,
    }),
);

export const ColorThumb = glamorous.div(
    {
        width: '1rem',
        height: '1rem',
        marginRight: '1rem',
    },
    p => ({
        background: p.color,
    }),
);

export const ColorLabel = glamorous.span({});
