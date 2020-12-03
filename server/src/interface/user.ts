interface OauthOption {
  code: string;
  client_id: string;
  client_secret: string;
}

interface OauthUserData {
  name: string;
  id: string;
  oAuthOrigin?: string;
  uid?: string;
}

interface InsertUser {
  pid: number;
  email: string;
  name: string;
  region: string;
  picture: string;
  color: string;
  isSunday: boolean;
  oAuthOrigin: string;
}

interface SelectUser {
  pid: number;
  oAuthOrigin: string;
}

export { OauthOption, OauthUserData, InsertUser, SelectUser };
