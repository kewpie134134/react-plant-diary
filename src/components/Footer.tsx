import React from 'react';
import { Link, Typography } from '@material-ui/core';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright Β© '}
        <Link color="inherit" href="https://plant-diary-prj.web.app/">
          π» γ²γΎγγζ₯θ¨ π»
        </Link>
        {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
