import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Toaster } from "react-hot-toast";
import allReducers from './reducers';
import './modules/socket';
import App from './App';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <BrowserRouter>
        <Provider store={store}>
            <Toaster />
            <App/>
        </Provider>
    </BrowserRouter>
    ,document.getElementById('root')
);