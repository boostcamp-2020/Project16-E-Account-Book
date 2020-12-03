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
};

export default socialBookQuery;
