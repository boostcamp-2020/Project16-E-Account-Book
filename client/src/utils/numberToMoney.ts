const number2Money = (money: number): string => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default { number2Money };
