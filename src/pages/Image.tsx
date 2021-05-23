import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';

type Image = {
  id: string;
};

const Image = (): JSX.Element => {
  const { id }: Image = useParams();

  return (
    <>
      <Header pageName="画像編集" />
      <div>{id}画像編集ページ</div>
    </>
  );
};

export default Image;
