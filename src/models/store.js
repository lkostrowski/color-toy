import {init} from '@rematch/core'
import colorsList from './colorsList';
import activeColor from './activeColor';
import autosuggest from './autosuggest';
import {createLogger} from 'redux-logger';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger())
}

const store = init({
    models: {
        colorsList,
        autosuggest,
        activeColor
    },
    redux: {
        middlewares
    }
});

export {store};
