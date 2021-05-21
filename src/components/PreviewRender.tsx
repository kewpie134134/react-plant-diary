import React, { useState } from 'react';
import moment from 'moment';
import Box from '@material-ui/core/Box';

import CalendarDatePicker from '../components/CalendarDatePicker';
import { usePreviewRenderStyles } from '../styles/PreviewRenderStyles';
import UploadImage from './UploadImage';

type PreviewProps = {
  preview: string;
};

// 選択した画像を表示させるためのプレビュー用コンポーネント
const PreviewRender = (preview: PreviewProps): JSX.Element | null => {
  // ファイル登録用の日付を格納
  const [calendarDate, setCalendarDate] = useState<string>(moment().format());

  // Material-UI の準備
  const classes = usePreviewRenderStyles();

  // ファイルが選択されているか確認
  if (Object.values(preview)[0] === '') return null;

  return (
    <>
      <img
        className={classes.image}
        src={Object.values(preview)[0]}
        alt="preview"
      />
      <div style={{ width: '100%' }}>
        <Box display="flex" p={1}>
          {/* 日付選択ボタン */}
          <Box flexGrow={1}>
            <CalendarDatePicker
              calendarDate={calendarDate}
              setCalendarDate={setCalendarDate}
            />
          </Box>
          {/* 画像アップロードボタン */}
          <Box>
            <UploadImage
              dataUri={Object.values(preview)[0]}
              calendarDate={calendarDate}
            />
          </Box>
        </Box>
      </div>
    </>
  );
};
export default PreviewRender;
