import React from 'react';

import ImageUploader from '../components/ImageUploader';

const Upload = () => {
  return (
    <>
      <h1>画像をアップロードする</h1>
      <ImageUploader />
      <a href="/">ホーム画面へ</a>
    </>
  );
};

export default Upload;
