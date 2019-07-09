import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './app/router/AppRouter';
import store from './app/store/store';

const AppProvider = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default AppProvider;
