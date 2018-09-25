import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { traineesS3 } from './util/TraineesS3';
import './App.css';
import AppContainer from './containers/AppContainer';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, {
    season: '3',
    group: '5',
    trainees: traineesS3
});

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();