import React, { useState } from 'react';
import moment from 'moment';

import { db, storage } from '../firebase/Firebase';
import CalendarDatePicker from '../components/CalendarDatePicker';
import { Box, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { usePreviewRenderStyles } from '../styles/PreviewRenderStyles';

type PreviewProps = {
  preview: string;
};

// 選択した画像を表示させるためのプレビュー用コンポーネント
const PreviewRender = (preview: PreviewProps): JSX.Element | null => {
  // ファイル登録用の日付を格納
  const [calendarDate, setCalendarDate] = useState<string>(moment().format());

  // Material-UI の準備
  const classes = usePreviewRenderStyles();

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
    <>
      <img
        className={classes.image}
        src={Object.values(preview)[0]}
        alt="preview"
      />
      <div style={{ width: '100%' }}>
        <Box display="flex" p={1}>
          <Box flexGrow={1}>
            <CalendarDatePicker
              calendarDate={calendarDate}
              setCalendarDate={setCalendarDate}
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={onUploadImage}
              startIcon={<CloudUploadIcon />}>
              アップロード
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
};
export default PreviewRender;
