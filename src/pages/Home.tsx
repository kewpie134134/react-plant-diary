import React from 'react';
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
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom>
              🌻 ひまわり日記 🌻
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph>
              日々のひまわりをご覧ください！
            </Typography>
          </Container>
        </div>
        <ShowStoredImages />
      </main>
    </>
  );
};

export default Home;
