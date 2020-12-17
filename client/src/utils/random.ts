export const getRandomKey = (): string => {
  return Math.random().toString(36).substr(2, 11);
};

export const getRandomMent = (list: Array<string>): string => {
  return list[Math.floor(Math.random() * list.length)];
};
