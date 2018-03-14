import { init } from '@rematch/core'
import colors from './colors';

const store = init({
    models: {
        colors
    },
});

export {store};
