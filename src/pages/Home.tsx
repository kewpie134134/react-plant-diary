import React from 'react';

import Header from '../components/Header';
import Logout from '../components/Logout';
import ShowStoredImages from '../components/ShowStoredImages';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <h1>🌻 ひまわり図鑑 🌻</h1>
      <Logout />
      <ShowStoredImages />
    </>
  );
};

export default Home;
