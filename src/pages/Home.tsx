import React from 'react';
import { Container, Typography } from '@material-ui/core';

import { useHomeStyles } from '../styles/HomeStyles';
import Header from '../components/Header';
import ShowStoredImages from '../components/ShowStoredImages';

const Home = (): JSX.Element => {
  const classes = useHomeStyles();
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
              ๐ป ใฒใพใใๆฅ่จ ๐ป
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph>
              ๆฅใใฎใฒใพใใใใ่ฆงใใ ใใ๏ผ
            </Typography>
          </Container>
        </div>
        <ShowStoredImages />
      </main>
    </>
  );
};

export default Home;
