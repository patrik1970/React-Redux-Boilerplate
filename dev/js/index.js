import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allRedusers from './reducers';

const store = createStore(allRedusers);

ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));
