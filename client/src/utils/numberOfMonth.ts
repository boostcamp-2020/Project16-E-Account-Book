const numberOfMonth = (date: string): number => {
  const [year, month] = date.split('-');
  const days = new Date(Number(year), Number(month), 0).getDate();
  return days;
};

export default numberOfMonth;
