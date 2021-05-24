import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { db } from '../firebase/Firebase';
import NoImageJpg from '../images/no_image.jpg';
import Header from '../components/Header';
import SelectImage from '../components/SelectImage';
import PreviewRender from '../components/PreviewRender';

const EditStoredImage = (): JSX.Element => {
  // ホーム画面上に表示されている、DB に格納されていた画像を格納するためのインスタンス
  // ここでの storedImage には firestore に格納されている 'http://~~~' の文字列が入る。
  const [storedImage, setStoredImage] = useState<string>('');

  // props として送られてくる画像情報を一時的に保持しておく
  let propsImageData: string;

  // Link to で指定されたオブジェクト情報を取得する
  const location = useLocation<{ downloadUrl: string }>();

  // '/image/2021-01-01' が location.pathname に格納されているので、
  // split('/') を使用して 2 つめの '/' 以降の日付情報を取得する。
  const storedImageDate = location.pathname.split('/')[2];

  try {
    propsImageData = location.state.downloadUrl;
  } catch (error) {
    console.log(
      `正常ルート（ホーム画面）から呼び出されなかったため、downloadUrl が undefined となります：${error.message}`
    );
    propsImageData = '';
  }

  // storedImage に Firebase に画像データ情報をセットする
  useEffect(() => {
    setStoredImage(propsImageData);
  }, []);

  // propsImageData に値が入っていない場合
  if (!propsImageData) {
    console.log('FireStore から画像を取得します。');
    // 日付情報を頼りに画像の downloadUri を取得する
    const docRef = db.collection('images').doc(storedImageDate).get();
    docRef.then((doc) => {
      if (!doc.exists) {
        // FireStore 上に画像データがない場合は 404 画像を返す。
        console.log(
          'FireStore 上で日付情報から画像データを取得できませんでした。'
        );
        setStoredImage(NoImageJpg);
        return;
      } else {
        // FireStore 上に画像データがある場合は取得する。
        console.log(
          'FireStore 上に日付に合致する画像があったので、表示します。'
        );
        propsImageData = doc?.data()?.downloadUrl;
        setStoredImage(propsImageData);
      }
    });
  }

  return (
    <>
      <Header pageName="画像編集" />
      <SelectImage setPreview={setStoredImage} />
      <PreviewRender preview={storedImage} />
      <img src={propsImageData}></img>
    </>
  );
};

export default EditStoredImage;
