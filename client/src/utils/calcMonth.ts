// eslint-disable-next-line import/prefer-default-export
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
