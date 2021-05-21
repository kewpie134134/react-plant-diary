import React from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { db, storage } from '../firebase/Firebase';

type UploadImageType = {
  dataUri: string;
  calendarDate: string;
};

const UploadImage = ({
  dataUri,
  calendarDate,
}: UploadImageType): JSX.Element => {
  // Firebase に画像をアップロードする
  const onUploadImage = async () => {
    // Data URI を Blob に変換する
    const response = await fetch(dataUri);
    const blob = await response.blob();
    // 拡張子
    const fileExpand = blob.type.split('/')[1];
    // Firebase Storage に画像をアップロードするための参照を作成
    const ref = storage
      .ref()
      .child('images')
      .child(`${calendarDate.split('T')[0]}.${fileExpand}`);
    // Firebase Storage に画像をアップロード
    ref
      .put(blob)
      .then((snapshot) => {
        console.log(snapshot);
        console.log('FireStorage に画像をアップロードしました！');
      })
      // Firebase Storage に画像をアップロード後、Storage 上の URL を FireStore に登録
      .then(() => {
        ref.getDownloadURL().then((url: string) => {
          db.collection('images')
            .doc(`${calendarDate.split('T')[0]}`)
            .set({ downloadUrl: url });
          console.log('FireStore に downloadURL を格納しました！');
        });
      });
  };
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onUploadImage}
      startIcon={<CloudUploadIcon />}>
      アップロード
    </Button>
  );
};

export default UploadImage;
