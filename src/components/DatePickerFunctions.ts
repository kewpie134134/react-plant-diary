import moment, { Moment } from 'moment';

/**
 * JST基準に変換して返す
 * @param {string} dateTimeStr YYYY-MM-DDTHH:mm:00Z
 * @returns {moment.Moment}
 */
export const parseAsMoment = (dateTimeStr: string): Moment => {
  return moment.utc(dateTimeStr, 'YYYY-MM-DDTHH:mm:ssZ', 'ja').utcOffset(9);
};
