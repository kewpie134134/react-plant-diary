import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';

const Image = (): JSX.Element => {
  try {
    const location = useLocation<{ downloadUrl: string }>();
    console.log(location.state.downloadUrl);
    console.log(location.pathname);
  } catch (e) {
    // downloadUrl が取得できない場合に起こりうる。
    // 1. firestore 上に画像が登録されていたらそれを取ってくる
    // 2. 画像がアップロードされていない場合は、画像がない旨を知らせる
    //    -> 画像アップロードページの UI を示す
    console.log(e.message);
  }

  return (
    <>
      <Header pageName="画像編集" />
      <div>{location.pathname}画像編集ページ</div>
    </>
  );
};

export default Image;
