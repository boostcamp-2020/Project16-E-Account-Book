import React from 'react';
import styled from 'styled-components';
import CreateButton from '@atoms/button/CreateButton';
import { useDispatch } from 'react-redux';
import { setPrevious } from '@actions/previous/type';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const FloatRightBottomContainer = styled.div`
  position: fixed;
  right: 1.6em;
  bottom: 1.6em;
`;

const NewTransactionButton: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(setPrevious(window.location.href));
  const link = '/accountbook/transaction/new';
  return (
    <Container>
      <FloatRightBottomContainer>
        <CreateButton link={link} />
      </FloatRightBottomContainer>
    </Container>
  );
};

export default NewTransactionButton;
