import React from 'react';
import styled from 'styled-components';
import Test from '@svg/test-logo.svg';
import myColor from '@theme/color';
import { login } from '@actions/user/type';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAxiosData } from '@utils/axios';
import * as API from '@utils/api';

interface props {
  id: number;
}

const TestButton = styled.button`
  width: 100%;
  max-width: 320px;
  height: 60px;
  border: 0;
  display: flex;
  font-size: 20px;
  margin: 5px 0px;
  background: transparent;
  text-decoration: none;
  cursor: pointer;
`;

const TestIcon = styled.img`
  background-color: ${myColor.oauth.test};
  border-radius: 8px;
  height: 100%;
`;

const TestName = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${myColor.oauth.test};
  color: ${myColor.primary.white};
  border-radius: 5px;
  font-size: 18px;
  @media (max-width: 530px) {
    font-size: 7px;
  }
`;

const TransactionInfo: React.FC<props> = ({ id }: props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const getTestToken = async (index: number) => {
    const jwtToken = await getAxiosData(API.GET_TEST_TOKEN(index));
    localStorage.setItem('jwt', jwtToken);
    dispatch(login());
    history.push('/');
  };

  return (
    <TestButton onClick={() => getTestToken(id)}>
      <TestIcon src={Test} alt="logo" />
      <TestName>테스트 {id}번 계정 로그인</TestName>
    </TestButton>
  );
};

export default TransactionInfo;
