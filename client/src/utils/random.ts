export const getRandomKey = (): string => {
  return Math.random().toString(36).substr(2, 11);
};

export const getRandomMent = <T>(list: Array<T>): T => {
  return list[Math.floor(Math.random() * list.length)];
};
