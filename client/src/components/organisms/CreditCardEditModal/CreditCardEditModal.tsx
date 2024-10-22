import React, { useEffect } from 'react';
import Modal from '@molecules/Modal';
import CreditCardEditFormBox from '@organisms/CreditCardEditFormBox';
import Line from '@atoms/hr/Line';
import myColor from '@theme/color';
import styled from 'styled-components';
import CreditCard from '@molecules/CreditCard';
import * as Axios from '@utils/axios';
import * as API from '@utils/api';
import { setPayment } from '@actions/payment/type';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import { getRandomKey } from '@utils/random';

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

  const deleteButtonClick = async (name: any) => {
    const result = window.confirm(
      '해당 결제수단 관련 내역이 모두 삭제됩니다. 삭제를 진행하시겠습니까?',
    );
    if (result) {
      let paymentPk;

      if (payments.length === 1) {
        paymentPk = payments[0].id;
      } else {
        payments.forEach((payment) => {
          if (payment.name === name) {
            paymentPk = payment.id;
          }
        });
      }
      if (paymentPk) {
        await Axios.deleteAxios(API.DELETE_PAYMENT(paymentPk));
        const newPayment = await Axios.getAxiosData(API.GET_PAYMENT);
        dispatch(setPayment(newPayment.data));
      }
    }
  };

  let cardList = payments.map((cardName) => (
    <CreditCard key={getRandomKey()} buttonEvent={deleteButtonClick} name={cardName.name} />
  ));

  useEffect(() => {
    cardList = payments.map((cardName) => (
      <CreditCard key={getRandomKey()} buttonEvent={deleteButtonClick} name={cardName.name} />
    ));
  }, [payments]);

  const title = '결제 수단 관리';

  const createButtonClick = async (name: string) => {
    if (name === '') {
      alert('이름을 입력해주세요.');
      return;
    }
    await Axios.postAxios(API.POST_PAYMENT, { name });

    const newPayment = await Axios.getAxiosData(API.GET_PAYMENT);
    dispatch(setPayment(newPayment.data));
  };

  return (
    <Modal title={title}>
      <CreditCardEditFormBox buttonEvent={createButtonClick} />
      <Line widthPercent="110" height="0.25rem" lineColor={myColor.primary.lightGray} />
      <ScrollDiv>{cardList}</ScrollDiv>
    </Modal>
  );
};

export default CreditCardEditModal;
