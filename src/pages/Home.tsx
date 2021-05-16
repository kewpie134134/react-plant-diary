import React from 'react';

import { auth } from '../firebase/Firebase';

import ShowStoredImages from '../components/ShowStoredImages';

const Home = (): JSX.Element => {
  const logOut = () => {
    auth.signOut();
  };
  return (
    <>
      <h1>🌻 ひまわり図鑑 🌻</h1>
      {/* ユーザーをログアウトさせる */}
      <button onClick={logOut}>サインアウト</button>
      <a href="/upload">アップロード画面へ</a>
      <ShowStoredImages />
    </>
  );
};

export default Home;
