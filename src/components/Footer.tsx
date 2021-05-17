import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://plant-diary-prj.web.app/">
          🌻 ひまわり図鑑 🌻
        </Link>
        {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
