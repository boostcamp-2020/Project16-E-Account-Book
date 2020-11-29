import React from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import OAuthButton from '@atoms/button/OAuthButton';
import myColor from '@theme/color';

const OAuthButtonList: React.FC = () => {
  const githubLink = 'https://github.com/login/oauth/authorize?client_id=bfe4a019e66ed4ec22b5';
  const naverLink =
    'https://nid.naver.com/oauth2.0/authorize?client_id=PVWZnvtDnJEao4OyhTht&response_type=code&redirect_uri=http://127.0.0.1:3000/callback/login?site=naver&state=abc';
  return (
    <ColumnFlexContainer margin="20px 0px">
      <OAuthButton site="GitHub" backgroundColor={myColor.primary.lightBlack} link={githubLink}>
        깃허브 계정으로 로그인
      </OAuthButton>
      <OAuthButton site="Naver" backgroundColor={myColor.primary.green} link={naverLink}>
        네이버 계정으로 로그인
      </OAuthButton>
    </ColumnFlexContainer>
  );
};

export default OAuthButtonList;
