import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarDatePicker = (): JSX.Element => {
  // react-datepicker を使用する
  const initialDate = new Date();
  const [startDate, setStartDate] = useState<Date>(initialDate);
  const handleChange = (date: Date) => {
    setStartDate(date);
  };

  return (
    <>
      <DatePicker selected={startDate} onChange={handleChange} />
    </>
  );
};

export default CalendarDatePicker;
