const numberOfMonth = (date: any): number => {
  const [year, month] = date.split('-');
  const days = new Date(year, month, 0).getDate();
  return days;
};

export default numberOfMonth;
