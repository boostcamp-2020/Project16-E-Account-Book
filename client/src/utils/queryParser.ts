const queryParser = (input: string): any => {
  const key = 0;
  const value = 1;

  const queryString = input.split('?')[value];

  const queryList: string[] = queryString.split('&');
  const parsedQuery = new Map();
  queryList.forEach((el) => {
    const query = el.split('=');
    parsedQuery.set(query[key], query[value]);
  });
  return parsedQuery;
};

export default queryParser;
