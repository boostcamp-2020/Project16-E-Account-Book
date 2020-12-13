const SEC = 1;
const MIN = SEC * 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;

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

export const getPastMonthList = (count: number): number[] => {
  const date = new Date();
  const result: number[] = [];
  let month = date.getMonth() + 1;
  for (let index = 0; index < count; index += 1) {
    result.push(month);

    if (month === 1) {
      month = 12;
    } else {
      month -= 1;
    }
  }
  return result;
};

export const firstDayOfWeek = (date: string): number => {
  const [year, month] = date.split('-');
  const firstDay = new Date(Number(year), Number(month) - 1, 1);
  const day = firstDay.getDay();
  return day;
};

export const makeMonth = (
  allDay: Array<{ date: number; inmoney: number; exmoney: number }>,
  emptyDays: number,
  endDays: number,
): Array<any> => {
  const emptyDay = { date: 0, inmoney: 0, exmoney: 0 };
  for (let i = 1; i <= emptyDays; i += 1) {
    allDay.push(emptyDay);
  }
  for (let j = 1; j <= endDays; j += 1) {
    allDay.push({ date: j, inmoney: 0, exmoney: 0 });
  }
  const remain = 7 - ((emptyDays + endDays) % 7);
  if (remain !== 7) {
    for (let k = 1; k <= remain; k += 1) {
      allDay.push(emptyDay);
    }
  }
  return allDay;
};

export const numberOfMonth = (date: string): number => {
  const [year, month] = date.split('-');
  const days = new Date(Number(year), Number(month), 0).getDate();
  return days;
};

export const getPastTimeString = (date: string): string => {
  const createTime = new Date(date);
  const currentTime = new Date();
  const diffSecond = (currentTime.getTime() - createTime.getTime()) / 1000;

  if (diffSecond < MIN) {
    return `${diffSecond} seconds ago...`;
  }

  if (diffSecond < HOUR) {
    return `${Math.round(diffSecond / 60)} minutes ago...`;
  }

  if (diffSecond < DAY) {
    return `${Math.round(diffSecond / 60 / 60)} hours ago...`;
  }

  if (diffSecond < WEEK) {
    return `${Math.round(diffSecond / 60 / 60 / 24)} days ago...`;
  }

  return date;
};
