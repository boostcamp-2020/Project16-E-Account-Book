import React from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import OAuthButton from '@atoms/button/OAuthButton';

const OAuthButtonList: React.FC = () => {
  const githubLink = 'https://github.com/login/oauth/authorize?client_id=bfe4a019e66ed4ec22b5';
  const naverLink = 'https://www.naver.com/';
  return (
    <ColumnFlexContainer margin="20px 0px">
      <OAuthButton site="GitHub" backgroundColor="#444444" link={githubLink}>
        깃허브 계정으로 로그인
      </OAuthButton>
      <OAuthButton site="Naver" backgroundColor="#4fa42b" link={naverLink}>
        네이버 계정으로 로그인
      </OAuthButton>
    </ColumnFlexContainer>
  );
};

export default OAuthButtonList;
