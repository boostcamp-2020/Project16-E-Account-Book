const cookieParser = (input: string): any => {
  const key = 0;
  const value = 1;

  if (input.length === 0) return { jwt: undefined };
  const result = {};

  const cookieList: string[] = input.split(';');
  cookieList.forEach((el) => {
    const query = el.split('=');
    result[query[key].replace(/ /g, '')] = query[value];
  });
  return result;
};

export default cookieParser;
