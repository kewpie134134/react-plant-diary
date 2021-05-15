import React, { useState, useEffect } from 'react';
import { db } from '../firebase/Firebase';

type ImageUrlsProps = {
  date: string;
  downloadUrl: string;
};

const ShowStoredImages = (): JSX.Element => {
  // Firestore から取得した FireStrage 上の画像ダウンロード URL を非同期で格納する箱を作成
  const [imageUrls, setImageUrls] = useState<ImageUrlsProps[]>([]);
  // DOM 読み込み時に一回だけ imageUrls[] に、
  // FireStorage に格納されている画像の downloadUrl 情報を格納する。
  useEffect(() => {
    // FireStore 上の ドキュメント[images] 配下にあるデータを取得する
    const docRef = db.collection('images').get();
    // 取得したデータを imageUrls[] に格納する
    docRef.then((snapshot) => {
      snapshot.forEach((doc) => {
        setImageUrls((imageUrls) => [
          ...imageUrls,
          {
            date: doc.id,
            downloadUrl: doc.data().downloadUrl,
          },
        ]);
      });
    });
  }, []);
  return (
    <div>
      {imageUrls.map((imageUrl) => {
        return (
          <div key={imageUrl.date}>
            <img src={imageUrl.downloadUrl}></img>
          </div>
        );
      })}
    </div>
  );
};

export default ShowStoredImages;
