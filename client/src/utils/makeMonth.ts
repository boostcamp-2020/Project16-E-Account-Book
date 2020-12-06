const makeMonth = (allDay: any, emptyDays: number, endDays: number): Array<any> => {
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

export default makeMonth;