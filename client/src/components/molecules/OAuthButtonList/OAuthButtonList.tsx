import React from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import OAuthButton from '@atoms/button/OAuthButton';
import myColor from '@theme/color';
import 'dotenv/config';
import getRandomKey from '@utils/random';

const OAuthButtonList: React.FC = () => {
  const authState = getRandomKey();
  const githubLink = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&state=${authState}`;
  const naverLink = `https://nid.naver.com/oauth2.0/authorize?client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_NAVER_CALLBACK_URL}&state=${authState}`;
  return (
    <ColumnFlexContainer margin="20px 0px">
      <OAuthButton site="GitHub" backgroundColor={myColor.oauth.lightBlack} link={githubLink}>
        깃허브 계정으로 로그인
      </OAuthButton>
      <OAuthButton site="Naver" backgroundColor={myColor.oauth.green} link={naverLink}>
        네이버 계정으로 로그인
      </OAuthButton>
    </ColumnFlexContainer>
  );
};

export default OAuthButtonList;
