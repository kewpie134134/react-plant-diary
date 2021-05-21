import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import { useSelectImageStyles } from '../styles/SelectImageStyles';
import PreviewRender from './PreviewRender';

const SelectImage = (): JSX.Element => {
  // Material-UI の準備
  const classes = useSelectImageStyles();

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
      <div className={classes.root}>
        <input
          accept="image/jpeg, image/png"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={(event) => {
            handleChangeFile(event);
          }}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            画像を選択
          </Button>
        </label>
      </div>
      <div>
        <PreviewRender preview={preview} />
      </div>
    </>
  );
};

export default SelectImage;
