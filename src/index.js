//import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import studentListReducer from './reducers';

import './index.css';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(studentListReducer);

// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();