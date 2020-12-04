const firstDayOfWeek = (date: any): number => {
  const [year, month] = date.split('-');
  const firstDay = new Date(year, month - 1, 1);
  const day = firstDay.getDay();
  return day;
};

export default firstDayOfWeek;
