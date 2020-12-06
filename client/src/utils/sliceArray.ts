const sliceArray = (inputArr: Array, size: any) => {
  const newArr: any = [];
  let i = 0;
  while (i < inputArr.length) {
    newArr.push(inputArr.slice(i, i + size));
    i += size;
  }
  return newArr;
};

export default sliceArray;
