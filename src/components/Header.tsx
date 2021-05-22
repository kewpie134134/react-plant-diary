import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';

import Logout from './Logout';

type HeaderProps = {
  pageName: string;
};

const Header = ({ pageName }: HeaderProps): JSX.Element => {
  return (
    <header>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {`🌻 ひまわり日記 🌻  -- ${pageName} --`}
          </Typography>
        </Toolbar>
      </AppBar>
      <Link to="/">ホーム</Link> | <Link to="/upload">アップロード</Link>
      <Logout />
    </header>
  );
};

export default Header;
