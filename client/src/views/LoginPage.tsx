import React from 'react';
import ColumFlexContainer from '@atoms/div/ColumnFlexContainer';
import LogoWithSlogan from '@organisms/LogoWithSlogan';
import CenterContent from '@molecules/CenterContent';
import BeeBackground from '@organisms/BeeBackground';
import EasyLogin from '@organisms/EasyLogin';

function LoginPage(): JSX.Element {
  const slogan = '지갑 속 꿀 같은 돈을 지키는 첫번째 방법';
  return (
    <>
      <BeeBackground />
      <CenterContent>
        <ColumFlexContainer>
          <LogoWithSlogan slogan={slogan} />
          <EasyLogin />
        </ColumFlexContainer>
      </CenterContent>
    </>
  );
}

export default LoginPage;
