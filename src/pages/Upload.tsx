import React, { useState } from 'react';
import moment from 'moment';
import { Container, Typography } from '@material-ui/core';

import Header from '../components/Header';
import SelectImage from '../components/SelectImage';
import { useUploadStyles } from '../styles/UploadStyles';
import PreviewRender from '../components/PreviewRender';

const Upload = (): JSX.Element => {
  // Material-UI の準備
  const classes = useUploadStyles();
  // 選択された画像データを保持しておく State
  const [preview, setPreview] = useState<string>('');
  // ファイル登録用の日付を格納
  const [calendarDate, setCalendarDate] = useState<string>(moment().format());

  return (
    <>
      <Header pageName="アップロード" />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom>
              🌻 画像を登録 🌻
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph>
              毎朝のひまわり写真を登録してね！
            </Typography>
            <SelectImage setPreview={setPreview} />
            <PreviewRender
              preview={preview}
              calendarDate={calendarDate}
              setCalendarDate={setCalendarDate}
            />
          </Container>
        </div>
      </main>
    </>
  );
};

export default Upload;
