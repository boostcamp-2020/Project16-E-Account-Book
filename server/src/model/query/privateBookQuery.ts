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
  READ_PRIVATE_MONTH_TRANSACTION: `
    SELECT pt.amount, ca.assortment_id, ca.name
    FROM private_transaction as pt
    JOIN category as ca
    ON pt.category_id = ca.id
    WHERE pt.accountbook_id = ? AND year(pt.date) = ?
  `,
};

export default privateBookQuery;
