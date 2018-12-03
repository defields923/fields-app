import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'State/store';
import App from 'Components/';

const Container = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Container;
