const paymentQuery = {
  READ_USER_PAYMENTS: `
    SELECT user_payment.id, payment.name
    FROM user_payment LEFT OUTER JOIN payment ON user_payment.payment_id = payment.id
    WHERE user_payment.user_id = ?`,
  CREATE_USER_PAYMENTS: `
    INSERT into user_payment (user_id, payment_id) VALUES(?,?)
    `,
  READ_PAYMENTS: `
    SELECT name From payment
  `,
  CREATE_PAYMENTS: `
    INSERT into payment (name) VALUES(?)
  `,

  GET_PAYMENT_ID_BY_NAME: `
    SELECT id FROM payment WHERE name = ?
  `,
};

export default paymentQuery;
