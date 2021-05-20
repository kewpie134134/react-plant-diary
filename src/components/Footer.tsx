import React from 'react';
import { Link, Typography } from '@material-ui/core';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://plant-diary-prj.web.app/">
          🌻 ひまわり日記 🌻
        </Link>
        {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
