const userQuery = {
  READ_USER: 'SELECT * FROM users WHERE pid = ? AND oauth_origin = ?',
  READ_USER_NAME: 'SELECT name FROM users WHERE id = ?',
  CREATE_USER:
    'INSERT INTO users (pid, email, name, region, picture, color, is_sunday, oauth_origin) VALUES(?,?,?,?,?,?,?,?)',
};

export default userQuery;
