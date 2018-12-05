import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import RegisterFormContainer from './components/container/RegisterFormContainer';
import RulesContainer from './components/container/RulesContainer';
import GameFieldContainer from './components/container/GameFieldContainer'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import './scss/main.scss';

const Main = () => (
    <Fragment>
        <Route exact path='/' component={RulesContainer} />
        <Route path='/registration' component={RegisterFormContainer} />
        <Route path='/gamefield' component={GameFieldContainer} />
    </Fragment>
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Fragment>
                <Main />
            </Fragment>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
