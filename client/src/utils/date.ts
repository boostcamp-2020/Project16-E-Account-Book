const getNumberTwoDigits = (number: number): string => {
  return number >= 10 ? `${number}` : `0${number}`;
};

export const getDate = (now: string): string => {
  const date = new Date(now);
  const year = date.getFullYear();
  const month = 1 + date.getMonth();
  const monthString = getNumberTwoDigits(month);
  const day = date.getDate();
  const dayString = getNumberTwoDigits(day);
  return `${year}-${monthString}-${dayString}`;
};

export const getTime = (now: string): string => {
  const date = new Date(now);
  const hour = date.getHours();
  const hourString = getNumberTwoDigits(hour);
  const minute = date.getMinutes();
  const minuteString = getNumberTwoDigits(minute);
  return `${hourString}:${minuteString}`;
};
