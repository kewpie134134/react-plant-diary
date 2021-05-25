export const validDate = (dateString: string): boolean => {
  // 日付のフォーマットチェック
  const [stringYear, stringMonth, stringDate] = dateString.split('-');
  const [year, month, date] = [
    Number(stringYear),
    Number(stringMonth),
    Number(stringDate),
  ];
  const correctDate = new Date(year, month - 1, date);
  return (
    correctDate.getFullYear() === year &&
    correctDate.getMonth() === month - 1 &&
    correctDate.getDate() === date
  );
};
