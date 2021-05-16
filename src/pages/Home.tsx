import React from 'react';

import { auth } from '../firebase/Firebase';

import ShowStoredImages from '../components/ShowStoredImages';
import { Link } from 'react-router-dom';

const Home = (): JSX.Element => {
  const logOut = () => {
    auth.signOut();
  };
  return (
    <>
      <h1>🌻 ひまわり図鑑 🌻</h1>
      {/* ユーザーをログアウトさせる */}
      <button onClick={logOut}>サインアウト</button>
      <Link to="/upload">アップロード画面へ</Link>
      <ShowStoredImages />
    </>
  );
};

export default Home;
