import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import moment from 'moment';

import { useEditStoredImageStyles } from '../styles/EditStoredImageStyles';
import { db } from '../firebase/Firebase';
import NoImageJpg from '../images/no_image.jpg';
import { validDate } from '../components/DateCheck';
import Header from '../components/Header';
import SelectImage from '../components/SelectImage';
import PreviewRender from '../components/PreviewRender';

const EditStoredImage = (): JSX.Element => {
  // Material-UI の準備
  const classes = useEditStoredImageStyles();

  // ホーム画面上に表示されている、DB に格納されていた画像を格納するためのインスタンス
  // ここでの storedImage には firestore に格納されている 'http://~~~' の文字列が入る。
  const [storedImage, setStoredImage] = useState<string>('');

  // ファイル登録用の日付を格納
  const [calendarDate, setCalendarDate] = useState<string>(moment().format());

  // エラーフラグ
  let errorFlag;

  // props として送られてくる画像情報を一時的に保持しておく
  let propsImageData: string;

  // Link to で指定されたオブジェクト情報を取得する
  const location = useLocation<{ downloadUrl: string }>();

  // '/image/2021-01-01' が location.pathname に格納されているので、
  // split('/') を使用して 2 つめの '/' 以降の日付情報を取得する。
  const storedImageDate = location.pathname.split('/')[2];

  // Link to のオブジェクトに画像ダウンロード URL が記載されているか確認
  try {
    propsImageData = location.state.downloadUrl;
  } catch (error) {
    console.log(
      '正常ルート（ホーム画面）から呼び出されなかったため、downloadUrl が undefined となります'
    );
    propsImageData = '';
  }

  // storedImage に Firebase に画像データ情報をセットする
  useEffect(() => {
    setStoredImage(propsImageData);
  }, [propsImageData]);

  // 日付情報が正しく入力されている場合
  if (validDate(storedImageDate)) {
    // propsImageData に値が入っていない場合
    if (!propsImageData) {
      console.log('FireStore から画像を取得します。');
      // 日付情報を頼りに画像の downloadUri を取得する
      const docRef = db.collection('images').doc(storedImageDate).get();
      docRef.then((doc) => {
        if (!doc.exists || !doc.data()) {
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
          setStoredImage(doc?.data()?.downloadUrl);
        }
      });
    }
  } else {
    // 日付情報が正しく入力されていない場合
    console.log('日付情報が正しくないので、画像を表示できませんでした。');
    // エラーフラグを立てる
    errorFlag = true;
  }

  return (
    <>
      <Header />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom>
              🌻 画像を編集 🌻
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph>
              毎朝のひまわりの写真を登録してね！
            </Typography>
            <SelectImage setPreview={setStoredImage} />
            {errorFlag ? (
              <PreviewRender
                preview={NoImageJpg}
                calendarDate={calendarDate}
                setCalendarDate={setCalendarDate}
              />
            ) : (
              <PreviewRender
                preview={storedImage}
                calendarDate={storedImageDate}
                setCalendarDate={setCalendarDate}
              />
            )}
          </Container>
        </div>
      </main>
    </>
  );
};

export default EditStoredImage;
