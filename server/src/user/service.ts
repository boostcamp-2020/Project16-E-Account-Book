import 'dotenv/config';
import sql from '../model/db';
import query from '../model/query';

export const getUserName = async (userId: number) => {
  const [result] = await sql(query.READ_USER_NAME, [userId]);
  return result.name;
};

export default getUserName;
