import { Console } from 'console';
import { type } from 'os';
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
  const { pid, oAuthOrigin } = props;
  const [
    rows,
  ]: any = await db.query('select count(*) from users where pid = ? and oauth_origin = ?', [
    pid,
    oAuthOrigin,
  ]);
  console.log(rows[0]);

  /*
  가입 여부를 판단한다
  ㄴ 회원이면 토큰만 만들어 준다
  ㄴ 회원이 아니면 DB에 등록하고 토큰을 만들어준다

  가입 여부를 판단하고, 회원이면 이름을 리턴해준다
  ㄴ 회원이면 토큰도 준다
  ㄴ 회원이 아니면 Db에 등록하고 이름을 리턴해준다, 그 뒤 토큰을 만들어준다
  */
  /*
  router.get(/list, auth, listreturnController)
  router.get(/login, middle(isUser?), return)
  (url/   Authmiddle(authser), middle(ser), controller(ser))
  */

  // case
  // 결과값이 없거나 rows[0] 쓰면 에러남
  // 결과값이 1개

  // const data: [] = rows;

  // data.forEach((el: any) => {
  //   console.log(el.id);
  // });

  // console.log(rows[1].id);
  // console.log(JSON.parse(JSON.stringify(result))[0].id); <- 방법
};

export { insertUser, selectUser };
