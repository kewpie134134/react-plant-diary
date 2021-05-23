import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';

import { useHomeStyles } from '../styles/HomeStyles';
import Header from '../components/Header';
import ShowStoredImages from '../components/ShowStoredImages';

const Home = (): JSX.Element => {
  const classes = useHomeStyles();
  return (
    <>
      <Header pageName="ホーム" />
      <main>
        <Link to="/image/test">画像ページ</Link>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom>
              🌻 ひまわり日記 🌻
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph>
              日々成長するにひまわりをご覧ください！
            </Typography>
          </Container>
        </div>
        <ShowStoredImages />
      </main>
    </>
  );
};

export default Home;
