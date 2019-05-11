import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';

const CoolSns = ({ Component }) => {
  return (
    <>
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
    </>
  );
};

CoolSns.propTypes = {
  Component: PropTypes.elementType
};

export default CoolSns;
