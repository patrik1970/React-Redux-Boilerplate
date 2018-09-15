import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {provider} from 'react-redux';
import {createStore} from 'redux';
import allRedusers from './reducers';
import App from './components/app';

const store = createStore(allRedusers);

ReactDOM.render(
    <provider store={store}>
        <App />
    </provider>, document.getElementById('root'));
