import 'dotenv/config';
import sql from '../model/db';
import query from '../model/query';

export const createTransaction = async (transaction: (string | number)[]) => {
  const result = await sql(query.CREATE_PRIVATE_TRANSACTION, transaction);
  return result.insertId;
};

export default createTransaction;
