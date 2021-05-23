import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';

const EditStoredImage = (): JSX.Element => {
  let storedImage;
  const location = useLocation<{ downloadUrl: string }>();
  // '/image/2021-01-01' が location.pathname に格納されているので、
  // split を使用して 2 つめの '/' 以降の日付情報を取得する。
  const storedImageDate = location.pathname.split('/')[2];
  try {
    storedImage = location.state.downloadUrl;
    // console.log(location.state.downloadUrl);
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
      <div>{storedImageDate}画像編集ページ</div>
      <img src={storedImage} />
    </>
  );
};

export default EditStoredImage;
