import React from 'react';
import styled from 'styled-components';
import ColumFlexContainer from '@atoms/div/ColumnFlexContainer';
import CenterContent from '@molecules/CenterContent';
import BeeBackground from '@organisms/BeeBackground';
import TopNavBar from '@organisms/TopNavBar';

const Text = styled.div`
  text-align: center;
  margin-top: -20%;
  font-weight: bold;
  font-size: 36px;
`;

const LoginPage: React.FC = () => {
  return (
    <>
      <BeeBackground />
      <CenterContent>
        <TopNavBar />
        <ColumFlexContainer height="100%" justifyContent="center">
          <Text>404 NOT FOUND</Text>
        </ColumFlexContainer>
      </CenterContent>
    </>
  );
};

export default LoginPage;
