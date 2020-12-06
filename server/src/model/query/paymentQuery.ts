const paymentQuery = {
  READ_USER_PAYMENTS: `
    SELECT user_payment.id, payment.name
    FROM user_payment LEFT OUTER JOIN payment ON user_payment.payment_id = payment.id
    WHERE user_payment.user_id = ?`,
};

export default paymentQuery;
