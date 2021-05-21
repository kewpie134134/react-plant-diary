import React, { Fragment } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ja from 'date-fns/locale/ja';
import moment from 'moment';
import { Button } from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';

import { parseAsMoment } from '../components/DatePickerFunctions';

// PreviewRender.tsx から送られてくる引数の型宣言
type CalendarDatePickerProps = {
  calendarDate: string;
  setCalendarDate: React.Dispatch<React.SetStateAction<string>>;
};

// カレンダーの日本語対応のための設定
registerLocale('ja', ja);

const CalendarDatePicker = ({
  calendarDate,
  setCalendarDate,
}: CalendarDatePickerProps): JSX.Element => {
  // react-datepicker でカレンダーの日付が選択されたら、その値をセットする
  const handleChange = (selectedDate: Date): void => {
    setCalendarDate(moment(selectedDate).format());
  };

  return (
    <Fragment>
      <DatePicker
        locale="ja"
        selected={moment(calendarDate).toDate()}
        onChange={handleChange}
        customInput={
          <Button
            variant="contained"
            color="secondary"
            startIcon={<TodayIcon />}>
            {`日付：${parseAsMoment(calendarDate).format('YYYY年 MM月DD日')}`}
          </Button>
        }
      />
    </Fragment>
  );
};

export default CalendarDatePicker;
