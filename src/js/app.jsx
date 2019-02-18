import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store';

import MainComponent from './containers/start';

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('react'),
  );
};

window.onload = () => {
  render(MainComponent);
};

if (module.hot) {
  module.hot.accept('./', () => { render(MainComponent); });
}
