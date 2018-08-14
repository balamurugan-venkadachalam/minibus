import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {compose, combineReducers, createStore, applyMiddleware} from 'redux';
import authReducer  from './store/reducers/login';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({auth: authReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = createStore(
                            rootReducer, composeEnhancers(
                                applyMiddleware(thunk)
                            )
                        );
const app = (
    <Provider store={rootStore}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
);
                        


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
