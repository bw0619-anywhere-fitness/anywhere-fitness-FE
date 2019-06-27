import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import ClientApp from './ClientApp';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(

    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/client-app" component={ClientApp} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
