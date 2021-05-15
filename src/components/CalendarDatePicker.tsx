import React, { Fragment, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ja from 'date-fns/locale/ja';

import moment, { Moment } from 'moment';

/**
 * JST基準に変換して返す
 * @param {string} dateTimeStr YYYY-MM-DDTHH:mm:00Z
 * @returns {moment.Moment}
 */
const parseAsMoment = (dateTimeStr: string): Moment => {
  return moment.utc(dateTimeStr, 'YYYY-MM-DDTHH:mm:00Z', 'ja').utcOffset(9);
};

/**
 * 日付形式に変換して返す
 * @param {moment.Moment} momentInstance
 * @returns {string}
 */

// カレンダーの日本語対応のための設定
registerLocale('ja', ja);

const toUtcIso8601str = (momentInstance: Moment): string => {
  return momentInstance.clone().utc().format('YYYY-MM-DDTHH:mm:00Z');
};

const CalendarDatePicker = (): JSX.Element => {
  // react-datepicker を使用する
  const [startDate, setStartDate] = useState<string>(toUtcIso8601str(moment()));
  const handleChange = (selectedDate: Date): void => {
    setStartDate(toUtcIso8601str(moment(selectedDate)));
  };

  return (
    <Fragment>
      <DatePicker
        locale="ja"
        selected={moment(startDate).toDate()}
        onChange={handleChange}
        customInput={
          <button>{parseAsMoment(startDate).format('YYYY/MM/DD')}</button>
        }
      />
    </Fragment>
  );
};

export default CalendarDatePicker;
