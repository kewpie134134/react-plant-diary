import { Button, Container, Typography } from '@material-ui/core';
import React, { useState } from 'react';

import Header from '../components/Header';
import PreviewRender from '../components/PreviewRender';
import { useUploadStyles } from '../styles/UploadStyles';

const Upload = (): JSX.Element => {
  // Material-UI の準備
  const classes = useUploadStyles();

  // 選択された画像データを保持しておく State
  const [preview, setPreview] = useState<string>('');

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      setPreview(window.URL.createObjectURL(files[0]));
    }
  };
  return (
    <>
      <Header pageName="アップロード" />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom>
              🌻 画像を登録 🌻
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph>
              毎朝のひまわりの写真を登録してね！
            </Typography>
            <div className={classes.root}>
              <input
                accept="image/jpeg, image/png"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={(event) => {
                  handleChangeFile(event);
                }}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  画像を選択
                </Button>
              </label>
            </div>
          </Container>
        </div>
        <div>
          <PreviewRender preview={preview} />
        </div>
      </main>
    </>
  );
};

export default Upload;
