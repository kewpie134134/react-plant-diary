import moment, { Moment } from 'moment';

/**
 * JST基準に変換して返す
 * @param {string} dateTimeStr YYYY-MM-DDTHH:mm:00Z
 * @returns {moment.Moment}
 */
export const parseAsMoment = (dateTimeStr: string): Moment => {
  return moment.utc(dateTimeStr, 'YYYY-MM-DDTHH:mm:00Z', 'ja').utcOffset(9);
};

/**
 * 日付形式に変換して返す
 * @param {moment.Moment} momentInstance
 * @returns {string}
 */
export const toUtcIso8601str = (momentInstance: Moment): string => {
  return momentInstance.clone().utc().format('YYYY-MM-DDTHH:mm:00Z');
};
