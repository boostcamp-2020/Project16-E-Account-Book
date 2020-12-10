import React from 'react';
import styled from 'styled-components';
import CreateButton from '@atoms/button/CreateButton';
import { useDispatch } from 'react-redux';
import { setPrevious } from '@actions/previous/type';

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
    <>
      <FloatRightBottomContainer>
        <CreateButton link={link} />
      </FloatRightBottomContainer>
    </>
  );
};

export default NewTransactionButton;
