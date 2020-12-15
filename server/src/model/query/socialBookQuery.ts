const socialBookQuery = {
  READ_SOCIAL_BOOK_LIST: `SELECT accountbook_id FROM social_accountbook_users WHERE user_id = ? AND state = 2;`,
  READ_SOCIAL_BOOK: `
    SELECT id, name, description, color,
    (SELECT SUM(amount)
    FROM social_transaction AS transaction
    WHERE accountbook.id = transaction.accountbook_id 
    AND transaction.date > LAST_DAY(NOW() - interval 1 month) AND transaction.date <= LAST_DAY(NOW())
    AND transaction.payment_id IS NULL) AS incomeSum,
    (SELECT SUM(amount)
    FROM social_transaction AS transaction
    WHERE accountbook.id = transaction.accountbook_id
    AND transaction.date > LAST_DAY(NOW() - interval 1 month) AND transaction.date <= LAST_DAY(NOW())
    AND transaction.payment_id IS NOT NULL) AS expenditureSum
    FROM social_accountbook AS accountbook
    WHERE id IN (?);`,
  READ_SOCIAL_BOOK_MASTER: `
    SELECT id, name, description, color,
    (SELECT SUM(amount)
    FROM social_transaction AS transaction
    WHERE accountbook.id = transaction.accountbook_id 
    AND transaction.date > LAST_DAY(NOW() - interval 1 month) AND transaction.date <= LAST_DAY(NOW())
    AND transaction.payment_id IS NULL) AS incomeSum,
    (SELECT SUM(amount)
    FROM social_transaction AS transaction
    WHERE accountbook.id = transaction.accountbook_id
    AND transaction.date > LAST_DAY(NOW() - interval 1 month) AND transaction.date <= LAST_DAY(NOW())
    AND transaction.payment_id IS NOT NULL) AS expenditureSum
    FROM social_accountbook AS accountbook
    WHERE master_id = ?;`,
  READ_SOCIAL_BOOK_USER_IMAGES: `
    SELECT picture FROM users WHERE id IN
    (SELECT user_id FROM social_accountbook_users WHERE (state = 0 OR state = 2) AND accountbook_id = ?)
    LIMIT 3;`,
  READ_DAILY_SOCIAL_BOOK: `SELECT st.id, ct.name as category, py.name as payment , st.title, st.amount,  st.date from social_transaction as st
    JOIN category as ct on st.category_id = ct.id
    LEFT OUTER JOIN  payment as py on py.id = st.payment_id
    WHERE st.accountbook_id = ? AND date(st.date) = date(?)`,
  READ_BELONG_SOCIAL_BOOK_LIST: `SELECT accountbook_id FROM social_accountbook_users WHERE user_id = ? AND state = 2 OR state = 0;`,
  READ_SOCIAL_INCOME_CATEGORY: `
    SELECT SUM(amount) as money,
    (SELECT name FROM category WHERE category.id = social_transaction.category_id) as name
    FROM social_transaction
    WHERE accountbook_id = ? AND year(date) = ? AND month(date) = ? AND payment_id IS NULL
    GROUP BY category_id ORDER BY SUM(amount) DESC;`,
  READ_SOCIAL_EXPENDITURE_CATEGORY: `
    SELECT SUM(amount) as money,
    (SELECT name FROM category WHERE category.id = social_transaction.category_id) as name
    FROM social_transaction
    WHERE accountbook_id = ? AND year(date) = ? AND month(date) = ? AND payment_id IS NOT NULL
    GROUP BY category_id ORDER BY SUM(amount) DESC;`,
  CREATE_SOCIAL_TRANSACTION:
    'INSERT INTO social_transaction (accountbook_id, user_id, category_id, payment_id, date, title, amount) VALUES(?,?,?,?,?,?,?)',
  READ_MONTHLY_STATISTICS_EXPEND: `
    SELECT SUM(amount) FROM social_transaction 
    WHERE accountbook_id = ? AND date >= ? AND date < ? AND payment_id IS NOT NULL`,
  READ_MONTHLY_STATISTICS_INCOME: `
    SELECT SUM(amount) FROM social_transaction 
    WHERE accountbook_id = ? AND date >= ? AND date < ? AND payment_id IS NULL`,
  READ_SOCIAL_WEEKLY_STATISTICS_EXPEND: `
    SELECT SUM(amount) FROM social_transaction 
    WHERE accountbook_id = ? AND date >= ? AND date <= ? AND payment_id IS NOT NULL`,
  READ_SOCIAL_WEEKLY_STATISTICS_INCOME: `
    SELECT SUM(amount) FROM social_transaction 
    WHERE accountbook_id = ? AND date >= ? AND date <= ? AND payment_id IS NULL`,
  CREATE_SOCIAL_ACCOUNTBOOK:
    'INSERT INTO social_accountbook (master_id, name, description, color) VALUES(?,?,?,?)',
  CREATE_SOCIAL_ACCOUNTBOOK_USERS:
    'INSERT INTO social_accountbook_users (user_id, accountbook_id, state, invited_at) VALUES(?,?,?, NOW())',
  GET_SOCIAL_TRANSACTIONLIST: `
    SELECT st.id, st.date, py.name, ct.name as category, st.title, st.amount, at.name as assortment FROM social_transaction as st 
    JOIN category as ct ON st.category_id = ct.id 
    JOIN assortment as at ON ct.assortment_id = at.id 
    LEFT OUTER JOIN payment as py ON py.id = st.payment_id 
    WHERE st.accountbook_id = ? AND year(st.date) = ? AND month(st.date) = ? ORDER BY st.date`,
  UPDATE_SOCIAL_TRANSACTION: `UPDATE social_transaction SET category_id = ?, payment_id = ?, date = ?, title = ?, amount = ? WHERE id = ?`,
  DELETE_SOCIAL_TRANSACTION: `DELETE FROM social_transaction WHERE id = ?`,
  GET_SOCIAL_INVITATION: `
    SELECT invitation.id, invited_at as time, name,
    (SELECT name FROM users WHERE master_id = users.id) as master
    FROM social_accountbook_users invitation
    LEFT OUTER JOIN social_accountbook book ON invitation.accountbook_id = book.id
    WHERE user_id = ? AND state = 1 ORDER BY invitation.id DESC`,
  UPDATE_SOCIAL_INVITATION: `UPDATE social_accountbook_users SET state = ? WHERE user_id = ? AND id = ? AND state = 1;`,
  GET_SOCIAL_INVITATION_MASTER: `
    SELECT master_id as id FROM social_accountbook_users users
    LEFT OUTER JOIN social_accountbook book ON book.id = users.accountbook_id
    WHERE users.id = ?`,
  DELETE_SOCIAL_INVITATION: `DELETE FROM social_accountbook_users WHERE id = ? AND state = 1;`,
  READ_SOCIAL_TREND_INCOME: `
    SELECT SUM(amount) as money, date_format(date, '%d') as day
    FROM social_transaction
    WHERE accountbook_id = ? AND payment_id IS NULL
    AND year(date) = ? AND month(date) = ?
    GROUP BY day ORDER BY day`,
  READ_SOCIAL_TREND_EXPENDITURE: `
    SELECT SUM(amount) as money, date_format(date, '%d') as day
    FROM social_transaction
    WHERE accountbook_id = ? AND payment_id IS NOT NULL
    AND year(date) = ? AND month(date) = ?
    GROUP BY day ORDER BY day`,
};

export default socialBookQuery;
