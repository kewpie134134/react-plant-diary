import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import SelectImage from '../components/SelectImage';
import PreviewRender from '../components/PreviewRender';

const EditStoredImage = (): JSX.Element => {
  // ホーム画面上に表示されている、DB に格納されていた画像を格納するためのインスタンス
  // ここでの storedImage には firestore に格納されている 'http://~~~' の文字列が入る。
  const [storedImage, setStoredImage] = useState<string>('');

  // Link to で指定されたオブジェクト情報を取得する
  const location = useLocation<{ downloadUrl: string }>();

  // storedImage に Firebase に登録されている画像データ情報をセットする
  useEffect(() => {
    setStoredImage(location.state.downloadUrl);
  }, [location.state.downloadUrl]);

  // '/image/2021-01-01' が location.pathname に格納されているので、
  // split('/') を使用して 2 つめの '/' 以降の日付情報を取得する。
  const storedImageDate = location.pathname.split('/')[2];

  // TODO:
  // downloadUrl が取得できない場合に起こりうる。
  // 1. firestore 上に画像が登録されていたらそれを取ってくる
  // 2. 画像がアップロードされていない場合は、画像がない旨を知らせる
  //    -> 画像アップロードページの UI を示す

  return (
    <>
      <Header pageName="画像編集" />
      <div>{storedImageDate}画像編集ページ</div>
      <SelectImage setPreview={setStoredImage} />
      <PreviewRender preview={storedImage} />
    </>
  );
};

export default EditStoredImage;
