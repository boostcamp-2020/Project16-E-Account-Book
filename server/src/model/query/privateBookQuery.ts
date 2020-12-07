const privateBookQuery = {
  CREATE_PRIVATE_BOOK:
    'INSERT INTO private_accountbook (user_id, name, description, color) VALUES(?,?,?,?)',
  CREATE_PRIVATE_TRANSACTION:
    'INSERT INTO private_transaction (accountbook_id, category_id, payment_id, date, title, amount) VALUES(?,?,?,?,?,?)',
  GET_PRIVATE_TRANSACTIONLIST:
    'SELECT pt.id, pt.date, py.name, ct.name , pt.title, pt.amount FROM private_transaction as pt JOIN category as ct ON pt.category_id = ct.id LEFT OUTER JOIN payment as py ON py.id = pt.payment_id WHERE pt.accountbook_id = ? AND year(pt.date) = ? AND month(pt.date) = ?',
};

export default privateBookQuery;
