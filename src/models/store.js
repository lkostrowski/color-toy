import {init} from '@rematch/core'
import colorsList from './colorsList';
import activeColor from './activeColor';
import autosuggest from './autosuggest';
import {createLogger} from 'redux-logger';

const store = init({
    models: {
        colorsList,
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
