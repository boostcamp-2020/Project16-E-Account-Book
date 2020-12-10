import 'dotenv/config';
import sql from '../model/db';
import query from '../model/query';

export const getUserInfo = async (userId: number) => {
  const [result] = await sql(query.READ_USER_INFO, [userId]);
  return result;
};

export default getUserInfo;
