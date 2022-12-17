export const isLeapYear = (year: number): boolean => {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
};

export const getTotalDaysCount = (date: Date): number => {
  return isLeapYear(date.getFullYear()) ? 366 : 365;
};
