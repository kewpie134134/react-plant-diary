import React from 'react';
import { Container, Typography } from '@material-ui/core';

import Header from '../components/Header';
import SelectImage from '../components/SelectImage';
import { useUploadStyles } from '../styles/UploadStyles';

const Upload = (): JSX.Element => {
  // Material-UI の準備
  const classes = useUploadStyles();

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
            <SelectImage />
          </Container>
        </div>
      </main>
    </>
  );
};

export default Upload;
