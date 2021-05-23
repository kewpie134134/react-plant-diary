import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';

type ImageProps = {
  date: string;
};

const Image = (): JSX.Element => {
  const { date }: ImageProps = useParams();

  return (
    <>
      <Header pageName="画像編集" />
      <div>{date}画像編集ページ</div>
    </>
  );
};

export default Image;
