import React from 'react';

import { auth } from '../firebase/Firebase';
import Header from '../components/Header';
import ShowStoredImages from '../components/ShowStoredImages';

const Home = (): JSX.Element => {
  const logOut = () => {
    auth.signOut();
  };
  return (
    <>
      <Header />
      <h1>🌻 ひまわり図鑑 🌻</h1>
      {/* ユーザーをログアウトさせる */}
      <button onClick={logOut}>サインアウト</button>
      <ShowStoredImages />
    </>
  );
};

export default Home;
