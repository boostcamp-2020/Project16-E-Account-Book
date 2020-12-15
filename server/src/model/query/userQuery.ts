const userQuery = {
  READ_USER: 'SELECT * FROM users WHERE pid = ? AND oauth_origin = ?',
  READ_USER_INFO: 'SELECT name, picture, is_sunday as isSunday FROM users WHERE id = ?',
  CREATE_USER:
    'INSERT INTO users (pid, email, name, region, picture, color, is_sunday, oauth_origin) VALUES(?,?,?,?,?,?,?,?)',
  READ_USER_BY_NAME: 'SELECT id, email, name, picture FROM users WHERE name LIKE ?',
};

export default userQuery;
