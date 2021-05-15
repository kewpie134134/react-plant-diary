import React, { useState } from 'react';

import PreviewRender from '../components/PreviewRender';

const Upload = (): JSX.Element => {
  // 選択された画像データを保持しておく State
  const [preview, setPreview] = useState<string>('');

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      setPreview(window.URL.createObjectURL(files[0]));
    }
  };
  return (
    <>
      <h1>画像をアップロードする</h1>
      <div>
        <input
          type="file"
          accept="image/jpeg, image/png"
          onChange={(event) => {
            handleChangeFile(event);
          }}
        />
      </div>
      <div>
        <PreviewRender preview={preview} />
      </div>{' '}
      <a href="/">ホーム画面へ</a>
    </>
  );
};

export default Upload;
