import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';

import Logout from './Logout';

const Header = (): JSX.Element => {
  return (
    <header>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {`π» γ²γΎγγζ₯θ¨ π»`}
          </Typography>
        </Toolbar>
      </AppBar>
      <Link to="/">γγΌγ </Link> | <Link to="/upload">γ’γγγ­γΌγ</Link>
      <Logout />
    </header>
  );
};

export default Header;
