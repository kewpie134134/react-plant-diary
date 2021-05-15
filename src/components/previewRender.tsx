import React from 'react';

import { db, storage } from '../firebase/Firebase';
import CalendarDatePicker from '../components/CalendarDatePicker';

type PreviewProps = {
  preview: string;
};

// 選択した画像を表示させるためのプレビュー用コンポーネント
const previewRender = (preview: PreviewProps): JSX.Element | null => {
  // ファイルが選択されているか確認
  if (Object.values(preview)[0] === '') return null;

  // ファイルが選択されている場合、表示させる
  // ※ Firebase Storage のルールを全て許可してしまったので（allow read, write: if true;）
  // ※ 認証機能実装後にルールの見直しをする必要がある
  const onUploadImage = async () => {
    // Data URI を Blob に変換する
    const response = await fetch(Object.values(preview)[0]);
    const blob = await response.blob();
    // 拡張子
    const fileExpand = blob.type.split('/')[1];

    // Firebase Storage に画像をアップロード
    const ref = storage.ref().child('images').child(`2021-05-01.${fileExpand}`);
    ref.put(blob).then((snapshot) => {
      console.log('アップロードが完了しました！');
    });

    // firestore へ値を送信
    db.collection('images').doc('2021-05-01').set({ base64: 'base64' });
    console.log('あっぷろーど');
  };

  return (
    <>
      <img src={Object.values(preview)[0]} alt="preview" />
      <div>
        <CalendarDatePicker />
        <button onClick={onUploadImage}>アップロード</button>
      </div>
    </>
  );
};
export default previewRender;
