const syntax = {
  countUserByPidOrigin: 'select * from users where pid = ? and oauth_origin = ?',
  insertUser:
    'INSERT INTO users (pid, email, name, region, picture, color, is_sunday, oauth_origin) VALUES(?,?,?,?,?,?,?,?)',
};

export default syntax;
