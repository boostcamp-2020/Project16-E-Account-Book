import 'dotenv/config';
import sql from '../model/db';
import query from '../model/query';

export const getPayments = async (userId: number) => {
  const result = await sql(query.READ_USER_PAYMENTS, [userId]);
  return result;
};

export default getPayments;
