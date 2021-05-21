import React from 'react';
import { Button } from '@material-ui/core';

import { useSelectImageStyles } from '../styles/SelectImageStyles';

type SelectImageProps = {
  setPreview: React.Dispatch<React.SetStateAction<string>>;
};

const SelectImage = ({ setPreview }: SelectImageProps): JSX.Element => {
  // Material-UI の準備
  const classes = useSelectImageStyles();

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
      <br />
    </>
  );
};

export default SelectImage;
