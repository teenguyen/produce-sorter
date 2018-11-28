import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { GIRLS } from './util/Girls';
import './App.css';
import AppContainer from './containers/AppContainer';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, {
    group: '5',
    girls: GIRLS
});

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();