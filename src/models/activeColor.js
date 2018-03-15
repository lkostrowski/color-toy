export default {
    state: {
        name: '',
        hex: '#fff'
    },
    reducers: {
        setActiveColor: (state, color) => ({
            ...state,
            ...color
        }),
    }
}
