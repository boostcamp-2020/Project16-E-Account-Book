import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';
import Text from '@atoms/p/LeftLargeText';
import Button from '@atoms/button/IconDetailButton';
import FlexContainer from '@atoms/div/RowFlexContainer';
import { useDispatch } from 'react-redux';
import { showModal } from '@actions/modal/type';

interface Props {
  margin: string;
}

const Container = styled.div<Props>`
  margin-left: ${(props) => props.margin};
`;

const createTransactionHeader: React.FC = () => {
  const dispatch = useDispatch();
  const openModal = (view: string) => {
    dispatch(showModal(view));
  };

  return (
    <FlexContainer width="100%" margin="4rem 0 0">
      <Text>새로운 내역을 추가해보세요!</Text>
      <Container margin="auto">
        <Button
          name="csv"
          onClick={() => alert('현재 준비중인 서비스입니다.')}
          color={myColor.primary.green}
        />
      </Container>
      <Container margin="24px">
        <Button name="sms" onClick={() => openModal('sms')} />
      </Container>
    </FlexContainer>
  );
};

export default createTransactionHeader;
