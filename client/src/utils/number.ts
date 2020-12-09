export const numberToMoney = (money: number): string => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const inputToNumber = (input: string): number => {
  const number = Number(input.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'));
  return number;
};
