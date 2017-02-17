import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import * as reducers from './reducers';

import Toolbar from './components/Toolbar';
import DayForecastList from './components/DayForecastList';
import { fetchData } from './actions';

const store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));

function run() {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Toolbar />
        <DayForecastList />
      </div>
    </Provider>,
    document.getElementById('main'));
}

run();
store.subscribe(run);
store.dispatch(fetchData('Edinburgh,UK'));