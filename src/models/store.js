import {init} from '@rematch/core'
import colors from './colors';
import activeColor from './activeColor';
import autosuggest from './autosuggest';
import {createLogger} from 'redux-logger';

const store = init({
    models: {
        colors,
        autosuggest,
        activeColor
    },
    redux: {
        middlewares: [
            createLogger()
        ]
    }
});

export {store};
