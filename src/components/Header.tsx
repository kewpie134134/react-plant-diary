import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <Link to="/">ホーム</Link> | <Link to="/upload">アップロード</Link>
    </header>
  );
};

export default Header;
