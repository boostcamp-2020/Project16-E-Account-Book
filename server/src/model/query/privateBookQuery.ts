const privateBookQuery = {
  CREATE_PRIVATE_BOOK:
    'INSERT INTO private_accountbook (user_id, name, description, color) VALUES(?,?,?,?)',
  CREATE_PRIVATE_TRANSACTION:
    'INSERT INTO private_transaction (accountbook_id, category_id, payment_id, date, title, amount) VALUES(?,?,?,?,?,?)',
};

export default privateBookQuery;
