import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from "react-redux";
import * as dotenv from 'dotenv';
import {store} from "./models/store";

import './baseStyles';

dotenv.config();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
