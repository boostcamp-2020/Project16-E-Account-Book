import React from 'react';
import DescriptionLine from '@molecules/DescriptionLine';
import styled from 'styled-components';
import OAuthButtonList from '@molecules/OAuthButtonList';

const Wrapper = styled.div`
  width: 48%;
`;

const BeeBackground: React.FC = () => {
  const description = '간편 로그인';
  return (
    <Wrapper>
      <DescriptionLine description={description} />
      <OAuthButtonList />
    </Wrapper>
  );
};

export default BeeBackground;
