import React from 'react';
import Box from '@material-ui/core/Box';

import CalendarDatePicker from '../components/CalendarDatePicker';
import { usePreviewRenderStyles } from '../styles/PreviewRenderStyles';
import UploadImage from './UploadImage';

type PreviewProps = {
  preview: string;
  calendarDate: string;
  setCalendarDate: React.Dispatch<React.SetStateAction<string>>;
};

// 選択した画像を表示させるためのプレビュー用コンポーネント
const PreviewRender = ({
  preview,
  calendarDate,
  setCalendarDate,
}: PreviewProps): JSX.Element | null => {
  // Material-UI の準備
  const classes = usePreviewRenderStyles();

  // ファイルが選択されているか確認
  if (!preview) return null;

  return (
    <>
      <img className={classes.image} src={preview} alt="preview" />
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
            <UploadImage dataUri={preview} calendarDate={calendarDate} />
          </Box>
        </Box>
      </div>
    </>
  );
};
export default PreviewRender;
