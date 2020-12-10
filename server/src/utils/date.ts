// eslint-disable-next-line import/prefer-default-export
export const getPastMonthList = (count: number) => {
  const date = new Date();
  const result = [];
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  for (let index = 0; index < count; index += 1) {
    if (month === 12) result.push([`${year}-${month}-1`, `${year + 1}-1-1`]);
    else result.push([`${year}-${month}-1`, `${year}-${month + 1}-1`]);

    if (month === 1) {
      year -= 1;
      month = 12;
    } else {
      month -= 1;
    }
  }
  return result.reverse();
};

const minusOneDay = (date: Date): Date => {
  let minusDate = '';
  const smallMonthList = [2, 4, 6, 9, 11];
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let leapYear: boolean;

  if (year % 4 === 0 && year % 400 === 0 && year % 100 === 0) leapYear = true;
  else if (year % 4 === 0 && year % 100 === 0) leapYear = false;
  else if (year % 4 === 0) leapYear = true;
  else leapYear = false;

  if (day === 1) {
    if (smallMonthList.includes(month)) minusDate = `${year}-${month - 1}-${31}`;
    else if (month === 3) {
      if (leapYear) minusDate = `${year}-${month - 1}-${29}`;
      else minusDate = `${year}-${month - 1}-${28}`;
    } else if (month === 1) minusDate = `${year - 1}-${12}-${31}`;
    else minusDate = `${year}-${month - 1}-${30}`;
  } else minusDate = `${year}-${month}-${day - 1}`;

  return new Date(minusDate);
};

const dateToString = (date: Date): string => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const getPastWeekList = (count: number) => {
  const result: string[][] = [];

  let endDate: Date = new Date();
  let startDate: Date = new Date();

  for (let index = 0; index < count; index += 1) {
    while (true) {
      if (startDate.getDay() === 0) break;
      startDate = minusOneDay(startDate);
    }

    result.push([dateToString(startDate), dateToString(endDate)]);
    startDate = minusOneDay(startDate);
    endDate = startDate;
  }
  return result;
};
