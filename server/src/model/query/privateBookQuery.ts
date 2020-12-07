const privateBookQuery = {
  CREATE_PRIVATE_BOOK:
    'INSERT INTO private_accountbook (user_id, name, description, color) VALUES(?,?,?,?)',
  CREATE_PRIVATE_TRANSACTION:
    'INSERT INTO private_transaction (accountbook_id, category_id, payment_id, date, title, amount) VALUES(?,?,?,?,?,?)',
  GET_PRIVATE_TRANSACTIONLIST:
    'SELECT (pt.id, pt.date, py.name, ct.name , pt.title, pt.amount) FROM private_transaction as st JOIN category as ct ON st.category_id = ct.category_id LEFT OUTER JOIN payment as py on py.id = st.payment_id where st.accountbook_id = ? AND dateofyear(st.date) = ? AND dateofmonth(st.date) = ?',
};

export default privateBookQuery;
