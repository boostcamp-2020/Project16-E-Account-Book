import React from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import OAuthButton from '@atoms/button/OAuthButton';

const onClick = (): boolean => {
  return true;
};

const CenterContent: React.FC = () => {
  return (
    <ColumnFlexContainer margin="20px 0px">
      <OAuthButton site="GitHub" backgroundColor="#444444" onClick={onClick}>
        깃허브 계정으로 로그인
      </OAuthButton>
      <OAuthButton site="Naver" backgroundColor="#4fa42b" onClick={onClick}>
        네이버 계정으로 로그인
      </OAuthButton>
    </ColumnFlexContainer>
  );
};

export default CenterContent;
