import React, { Fragment } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ja from 'date-fns/locale/ja';
import moment from 'moment';

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
          <button>{parseAsMoment(calendarDate).format('YYYY/MM/DD')}</button>
        }
      />
    </Fragment>
  );
};

export default CalendarDatePicker;
