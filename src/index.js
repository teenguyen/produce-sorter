import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { S3Trainees } from './util/S3Trainees';
import './App.css';
import AppContainer from './containers/AppContainer';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, {
    season: '3',
    group: '4',
    trainees: S3Trainees
});

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();