const getFontColor = (color: string): string => {
  const redValue = parseInt(color.substring(1, 3), 16);
  const greenValue = parseInt(color.substring(3, 5), 16);
  const blueValue = parseInt(color.substring(5, 7), 16);
  const result = (redValue * 0.299 + greenValue * 0.587 + blueValue * 0.114) / 255;
  if (result >= 0.5) return 'black';
  return 'white';
};

const getRandomColor = (): string => {
  const color = `#${Math.round(Math.random() * 0xffffff).toString(16)}`;
  return color;
};

const getRandomColorInList = (colorList: string[][]): any => {
  const rowRandom = Math.floor(Math.random() * colorList.length);
  const colRandom = Math.floor(Math.random() * colorList[0].length);

  return colorList[rowRandom][colRandom];
};

export default { getFontColor, getRandomColor, getRandomColorInList };
