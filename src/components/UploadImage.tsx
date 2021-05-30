import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { db, storage } from '../firebase/Firebase';
import UploadingDialog from './UploadingDialog';

type UploadImageType = {
  dataUri: string;
  calendarDate: string;
};

const UploadImage = ({
  dataUri,
  calendarDate,
}: UploadImageType): JSX.Element => {
  // ダイアログの状態を保持するステート
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  // 画像アップロード完了フラグ
  const [hasUploaded, setHasUploaded] = useState<boolean>(false);

  // ダイアログからのコールバックでダイアログを閉じる
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  // Firebase に画像をアップロードする
  const onUploadImage = async () => {
    // ダイアログ表示用のメッセージを、アップロードようにするためのフラグ処理
    setHasUploaded(false);
    // ダイアログを開く
    setIsDialogOpen(true);
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
        });
      })
      .then(() => {
        console.log('FireStore に downloadURL を格納しました！');
        // アップロード完了のメッセージを表示するためのフラグ処理
        setHasUploaded(true);
        // ダイアログが閉じられていたら、アップロード完了後に再度ダイアログを開く
        if (!isDialogOpen) setIsDialogOpen(true);
      });
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={onUploadImage}
        startIcon={<CloudUploadIcon />}>
        アップロード
      </Button>
      <UploadingDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        hasUploaded={hasUploaded}
      />
    </>
  );
};

export default UploadImage;
