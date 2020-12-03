const privateBookQuery = {
  CREATE_PRIVATE_BOOK:
    'INSERT INTO private_accountbook (user_id, name, description, color) VALUES(?,?,?,?)',
};

export default privateBookQuery;
