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
  return result;
};
