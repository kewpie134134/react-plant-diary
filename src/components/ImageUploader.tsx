import React, { useState } from 'react';

type PreviewProps = {
  preview: string;
};

const ImageUploader = () => {
  // 選択された画像データを保持しておく State
  const [preview, setPreview] = useState<string>('');

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      setPreview(window.URL.createObjectURL(files[0]));
    }
  };

  // 選択した画像を表示させるためのプレビュー用コンポーネント
  const ImageRender = (preview: PreviewProps) => {
    // ファイルが選択されているか確認
    if (Object.values(preview)[0] === '') return null;

    // ファイルが選択されている場合、表示させる
    const onUploadImage = () => {
      console.log('あっぷろーど');
    };

    return (
      <>
        <img src={Object.values(preview)[0]} alt="preview" />
        <div>
          <button onClick={onUploadImage}>アップロード</button>
        </div>
      </>
    );
  };

  return (
    <>
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
        <ImageRender preview={preview} />
      </div>
    </>
  );
};

export default ImageUploader;
