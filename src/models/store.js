import {init} from '@rematch/core'
import colors from './colors';
import {createLogger} from 'redux-logger';

const store = init({
    models: {
        colors
    },
    redux: {
        middlewares: [
            createLogger()
        ]
    }
});

export {store};
