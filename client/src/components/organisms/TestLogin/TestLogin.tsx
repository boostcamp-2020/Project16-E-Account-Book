import React from 'react';
import Button from '@molecules/TestLoginButton';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import DescriptionLine from '@molecules/DescriptionLine';
import getRandomKey from '@utils/random';
import 'dotenv/config';

interface Props {
  size: number;
}

const TestLogin: React.FC<Props> = ({ size }: Props) => {
  const description = '테스트 계정 로그인';

  const testLoginButtons: JSX.Element[] = [];
  // eslint-disable-next-line no-plusplus
  for (let id = 1; id <= size; id++) {
    const button = <Button key={getRandomKey()} id={id} />;
    testLoginButtons.push(button);
  }
  return (
    <>
      <ColumnFlexContainer margin="20px 0px" width="48%">
        <DescriptionLine description={description} />
        <>{testLoginButtons}</>
      </ColumnFlexContainer>
    </>
  );
};

export default TestLogin;
