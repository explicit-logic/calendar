import { isLeapYear, getTotalDaysCount } from './main';

test('is leap year', () => {
  expect(isLeapYear(2012)).toBe(true);
});

test('get total days count', () => {
  expect(getTotalDaysCount(new Date('2023-01-01'))).toBe(365);
});
