/* eslint-disable no-restricted-syntax */
import { CategorySumData } from '../interface/social';

export const getCategoryPercentData = (categoryData: CategorySumData[]) => {
  const total = categoryData.reduce(function (pre, curr): number {
    return pre + parseInt(curr.money, 10);
  }, 0);

  const result = [];

  for (const data of categoryData) {
    const money = parseInt(data.money, 10);
    result.push({
      name: data.name,
      money,
      percent: Math.round((money / total) * 1000) / 10,
    });
  }

  return result;
};

export default getCategoryPercentData;
