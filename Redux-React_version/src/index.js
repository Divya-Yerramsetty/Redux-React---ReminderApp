import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import appState from './store'

console.log("This is your entire state of the application",appState.getState())

ReactDOM.render(
<Provider store={appState}>
    <App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
