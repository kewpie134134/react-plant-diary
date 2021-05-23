import React from 'react';
import { useParams } from 'react-router-dom';

type Image = {
  id: string;
};

const Image = () => {
  const { id }: Image = useParams();

  return (
    <>
      <div>{id}画像編集ページ</div>
    </>
  );
};

export default Image;
