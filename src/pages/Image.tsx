import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';

const Image = (): JSX.Element => {
  const location = useLocation<{ downloadUrl: string }>();
  console.log(location.state.downloadUrl);
  console.log(location.pathname);

  return (
    <>
      <Header pageName="画像編集" />
      <div>{location.pathname}画像編集ページ</div>
    </>
  );
};

export default Image;
