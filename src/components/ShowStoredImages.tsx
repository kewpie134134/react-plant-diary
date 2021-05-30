import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { db } from '../firebase/Firebase';
import { useShowStoredImagesStyles } from '../styles/ShowStoredImagesStyles';

type ImageUrlsProps = {
  date: string;
  downloadUrl: string;
};

const ShowStoredImages = (): JSX.Element => {
  // Material-UI 用のスタイルを生成
  const classes = useShowStoredImagesStyles();

  // Firestore から取得した FireStrage 上の画像ダウンロード URL を非同期で格納する箱を作成
  const [imageUrls, setImageUrls] = useState<ImageUrlsProps[]>([]);
  // DOM 読み込み時に一回だけ imageUrls[] に、
  // FireStorage に格納されている画像の downloadUrl 情報を格納する。
  useEffect(() => {
    // FireStore 上の ドキュメント[images] 配下にあるデータを取得する
    const docRef = db.collection('images').orderBy('date', 'desc').get();
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
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {imageUrls.map((imageUrl) => (
            <Grid item key={imageUrl.date} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={imageUrl.downloadUrl}
                  title={imageUrl.date}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {imageUrl.date}
                  </Typography>
                  <Typography>今日はまた一段と成長しました。</Typography>
                </CardContent>
                <CardActions>
                  <Link
                    to={{
                      pathname: `/image/${imageUrl.date}`,
                      state: { downloadUrl: imageUrl.downloadUrl },
                    }}>
                    <EditIcon fontSize="small" />
                    編集
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ShowStoredImages;
