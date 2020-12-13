import React, { useEffect } from 'react';
import Modal from '@molecules/Modal';
import CreditCardEditFormBox from '@organisms/CreditCardEditFormBox';
import Line from '@atoms/hr/Line';
import myColor from '@theme/color';
import styled from 'styled-components';
import CreditCard from '@molecules/CreditCard';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import * as Axios from '@utils/axios';
import * as API from '@utils/api';
import { setPayment } from '@actions/payment/type';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import RoundShortButton from '@atoms/button/RoundShortButton';

const ScrollDiv = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 90%;
`;

const CreditCardEditModal: React.FC = () => {
  const payments = useSelector((state: RootState) => state.payment.payment);

  const dispatch = useDispatch();
  let cardList = payments.map((cardName) => <CreditCard name={cardName.name} />);

  useEffect(() => {
    cardList = payments.map((cardName) => <CreditCard name={cardName.name} />);
  }, [payments]);

  const title = '결제 수단 관리';

  const createButtonClick = async (name: any) => {
    await Axios.postAxios(API.POST_PAYMENT, { name });

    const newPayment = await Axios.getAxiosData(API.GET_PAYMENT);
    dispatch(setPayment(newPayment.data));
  };

  return (
    <Modal title={title}>
      <CreditCardEditFormBox buttonEvent={createButtonClick} />
      <Line widthPercent="110" height="0.25rem" lineColor={myColor.primary.lightGray} />
      <ScrollDiv>{cardList}</ScrollDiv>
      <RowFlexContainer justifyContent="flex-end">
        <RoundShortButton>저장</RoundShortButton>
      </RowFlexContainer>
    </Modal>
  );
};

export default CreditCardEditModal;
