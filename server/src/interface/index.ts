interface oauthOption {
  code: string;
  client_id: string;
  client_secret: string;
}

interface oauthUserData {
  login: string;
  id: string;
}

export { oauthOption, oauthUserData };
