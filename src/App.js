import React, {Component} from 'react';
import {Provider} from "react-redux";
import {store} from "./models/store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    dupa
                </div>
            </Provider>
        );
    }
}

export default App;
