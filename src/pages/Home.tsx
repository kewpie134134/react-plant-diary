import React from 'react';
import ShowStoredImages from '../components/ShowStoredImages';

const Home = (): JSX.Element => {
  return (
    <>
      <h1>🌻 ひまわり図鑑 🌻</h1>
      <a href="/upload">アップロード画面へ</a>
      <ShowStoredImages />
    </>
  );
};

export default Home;
