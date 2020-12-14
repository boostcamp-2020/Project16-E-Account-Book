const privateBookQuery = {
  CREATE_PRIVATE_BOOK: `INSERT INTO private_accountbook (user_id, name, description, color) VALUES(?,?,?,?)`,
  CREATE_PRIVATE_TRANSACTION: `INSERT INTO private_transaction (accountbook_id, category_id, payment_id, date, title, amount) VALUES(?,?,?,?,?,?)`,
  GET_PRIVATE_TRANSACTIONLIST: `
    SELECT pt.id, pt.date, py.name, ct.name as category, pt.title, pt.amount, at.name as assortment FROM private_transaction as pt 
    JOIN category as ct ON pt.category_id = ct.id 
    JOIN assortment as at ON ct.assortment_id = at.id 
    LEFT OUTER JOIN payment as py ON py.id = pt.payment_id 
    WHERE pt.accountbook_id = ? AND year(pt.date) = ? AND month(pt.date) = ? ORDER BY pt.date`,
  GET_PRIVATE_BOOK_ID: `SELECT id FROM private_accountbook WHERE user_id = ?`,
  READ_PRIVATE_INCOME_CATEGORY: `
    SELECT SUM(amount) as money,
    (SELECT name FROM category WHERE category.id = private_transaction.category_id) as name
    FROM private_transaction
    WHERE accountbook_id = ? AND year(date) = ? AND month(date) = ? AND payment_id IS NULL
    GROUP BY category_id ORDER BY SUM(amount) DESC;`,
  READ_PRIVATE_EXPENDITURE_CATEGORY: `
    SELECT SUM(amount) as money,
    (SELECT name FROM category WHERE category.id = private_transaction.category_id) as name
    FROM private_transaction
    WHERE accountbook_id = ? AND year(date) = ? AND month(date) = ? AND payment_id IS NOT NULL
    GROUP BY category_id ORDER BY SUM(amount) DESC;`,
  READ_PRIVATE_WEEKLY_STATISTICS_EXPEND: `
    SELECT SUM(amount) FROM private_transaction 
    WHERE accountbook_id = ? AND date >= ? AND date <= ? AND payment_id IS NOT NULL`,
  READ_PRIVATE_WEEKLY_STATISTICS_INCOME: `
    SELECT SUM(amount) FROM private_transaction 
    WHERE accountbook_id = ? AND date >= ? AND date <= ? AND payment_id IS NULL`,
  READ_PRIVATE_MONTH_TRANSACTION: `
    SELECT SUM(amount) as money, 
    (SELECT name FROM category WHERE category.id = private_transaction.category_id) as name
    FROM private_transaction
    WHERE accountbook_id = ? AND payment_id IS NOT NULL
    AND date > LAST_DAY(NOW() - interval 1 month) AND date <= LAST_DAY(NOW())
    GROUP BY category_id ORDER BY SUM(amount) DESC LIMIT 4;`,
  READ_PRIVATE_MONTH_INCOME: `
    SELECT SUM(amount) as income FROM private_transaction
    WHERE accountbook_id = ? AND payment_id IS NULL
    AND date > LAST_DAY(NOW() - interval 1 month) AND date <= LAST_DAY(NOW())`,
  READ_PRIVATE_MONTH_EXPENDITURE: `
    SELECT SUM(amount) as expenditure FROM private_transaction
    WHERE accountbook_id = ? AND payment_id IS NOT NULL
    AND date > LAST_DAY(NOW() - interval 1 month) AND date <= LAST_DAY(NOW())`,
  READ_PRIVATE_MONTHLY_STATISTICS_EXPEND: `
    SELECT SUM(amount) FROM private_transaction 
    WHERE accountbook_id = ? AND date >= ? AND date < ? AND payment_id IS NOT NULL`,
  READ_PRIVATE_MONTHLY_STATISTICS_INCOME: `
    SELECT SUM(amount) FROM private_transaction 
    WHERE accountbook_id = ? AND date >= ? AND date < ? AND payment_id IS NULL`,
  READ_PRIVATE_TREND_INCOME: `
    SELECT SUM(amount) as money, date_format(date, '%d') as day
    FROM private_transaction
    WHERE accountbook_id = ? AND payment_id IS NULL
    AND year(date) = ? AND month(date) = ?
    GROUP BY day ORDER BY day`,
  READ_PRIVATE_TREND_EXPENDITURE: `
    SELECT SUM(amount) as money, date_format(date, '%d') as day
    FROM private_transaction
    WHERE accountbook_id = ? AND payment_id IS NOT NULL
    AND year(date) = ? AND month(date) = ?
    GROUP BY day ORDER BY day`,
  UPDATE_PRIVATE_TRANSACTION: `UPDATE private_transaction SET category_id = ?, payment_id = ?, date = ?, title = ?, amount = ? WHERE id = ?`,
  DELETE_PRIVATE_TRANSACTION: `DELETE FROM private_transaction WHERE id = ?`,
};

export default privateBookQuery;
