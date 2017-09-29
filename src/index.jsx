import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import '../assets/stylesheets/application.scss';

// components


// Containers

import CarsList from './containers/cars_list';
import CarsNew from './containers/cars_new';

//reducers
import garageReducer from './reducers/garage';
import carsReducer from './reducers/cars';

// State and reducers
const garageName = 'bricolman'; //prompt('What is your garage name ?') || `garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  cars: [],
  garage: garageName
};

const reducers = combineReducers({
  cars: carsReducer,
  garage: garageReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsList} />
        <Route path="/:garage/cars/new" exact component={CarsNew} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
