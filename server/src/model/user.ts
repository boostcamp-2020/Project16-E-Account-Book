import db from './db';
import * as Interface from '../interface';

const insertUser = async (props: Interface.insertUser) => {
  const { pid, email, name, region, picture, color, isSunday, oAuthOrigin } = props;
  const result = await db.query(
    'INSERT INTO users (pid, email, name, region, picture, color, is_sunday, oauth_origin) VALUES(?,?,?,?,?,?,?,?)',
    [pid, email, name, region, picture, color, isSunday, oAuthOrigin],
  );
};

const selectUser = async (props: Interface.selectUser) => {
  const { pid } = props;
  const result = await db.query('select count(*) from users where pid = ?', [pid]);
  console.log(result);
};

export { insertUser, selectUser };
