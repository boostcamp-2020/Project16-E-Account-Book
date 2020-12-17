const paymentQuery = {
  READ_USER_PAYMENTS: `
    SELECT user_payment.id, payment.name
    FROM user_payment LEFT OUTER JOIN payment ON user_payment.payment_id = payment.id
    WHERE user_payment.user_id = ?`,
  CREATE_USER_PAYMENTS: `
    INSERT INTO user_payment (user_id, payment_id) VALUES(?,?)
    `,
  READ_PAYMENTS: `
    SELECT name From payment
  `,
  CREATE_PAYMENTS: `
    INSERT INTO payment (name) VALUES(?)
  `,

  DELETE_PAYMENTS: `
    DELETE FROM payment WHERE id = ?
  `,

  GET_PAYMENT_ID_BY_NAME: `
    SELECT id FROM payment WHERE name = ?
  `,

  DELETE_USER_PAYMENTS: `
    DELETE FROM user_payment WHERE id = ?
  `,

  GET_PAYMENT_ID_BY_PK: `
    SELECT payment_id FROM user_payment WHERE id = ? 
  `,
};

export default paymentQuery;
