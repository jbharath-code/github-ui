import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import app from '../reducers/app';

/**
 * createStore creates store from appReducer
 */

export default createStore(app, compose(applyMiddleware(thunkMiddleware)));
