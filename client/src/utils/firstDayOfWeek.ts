const firstDayOfWeek = (date: any): string => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const [year, month] = date.split('-');
  const firstDay = new Date(year, month - 1, 1);
  const day = firstDay.getDay();
  return week[day];
};

export default firstDayOfWeek;
