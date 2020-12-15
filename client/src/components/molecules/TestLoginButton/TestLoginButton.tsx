import React from 'react';
import TestButton from '@atoms/button/OAuthButton';
import myColor from '@theme/color';
import { GET_TEST_LOGIN } from '@utils/api';

interface props {
  id: number;
}

const TransactionInfo: React.FC<props> = ({ id }: props) => {
  const link = GET_TEST_LOGIN(id);
  return (
    <TestButton link={link} site="Test" backgroundColor={myColor.oauth.test}>
      <>테스트 {id}번 계정 로그인</>
    </TestButton>
  );
};

export default TransactionInfo;
