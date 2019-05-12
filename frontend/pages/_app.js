import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import AppLayout from '../components/AppLayout';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

const CoolSns = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Cool SNS</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.17.0/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.17.0/antd.js" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

CoolSns.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object
};

// Redux DevTools Extension : http://extension.remotedev.io
export default withRedux((initialState, options) => {
  const middlewares = [];

  const enhancer = compose(
    applyMiddleware(...middlewares),

    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose
  );

  const store = createStore(reducer, initialState, enhancer);

  return store;
})(CoolSns);
