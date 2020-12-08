const firstDayOfWeek = (date: string): number => {
  const [year, month] = date.split('-');
  const firstDay = new Date(Number(year), Number(month) - 1, 1);
  const day = firstDay.getDay();
  return day;
};

export default firstDayOfWeek;
