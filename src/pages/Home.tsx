import React, { useState } from 'react';
import { storage } from '../firebase/Firebase';

const Home = (): JSX.Element => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const ref = storage.ref().child('images').child('2021-05-15.png');
  ref.getDownloadURL().then((url: string) => {
    setImageUrl(url);
  });
  return (
    <>
      <h1>🌻 ひまわり図鑑 🌻</h1>
      <a href="/upload">アップロード画面へ</a>
      <img src={imageUrl}></img>
    </>
  );
};

export default Home;
