interface oauthOption {
  code: string;
  client_id: string;
  client_secret: string;
}

interface oauthUserData {
  name: string;
  id: string;
}
interface insertUser {
  pid: number;
  email: string;
  name: string;
  region: string;
  picture: string;
  color: string;
  isSunday: boolean;
  oAuthOrigin: string;
}

interface selectUser {
  pid: number;
}
export { oauthOption, oauthUserData, insertUser, selectUser };
