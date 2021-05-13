import React from 'react';

import { db } from '../firebase/Firebase';

const Home = (): JSX.Element => {
  return (
    <>
      <h1>🌻 ひまわり図鑑 🌻</h1>
      <a href="/upload">アップロード画面へ</a>
    </>
  );
};

export default Home;
