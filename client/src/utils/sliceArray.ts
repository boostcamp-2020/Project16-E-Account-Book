const sliceArray = (
  inputArr: Array<{ date: number; inmoney: number; exmoney: number }>,
  size: number,
): Array<Array<{ date: number; inmoney: number; exmoney: number }>> => {
  const newArr: any = [];
  let i = 0;
  while (i < inputArr.length) {
    newArr.push(inputArr.slice(i, i + size));
    i += size;
  }
  return newArr;
};

export default sliceArray;
