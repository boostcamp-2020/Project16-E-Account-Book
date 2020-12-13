import React from 'react';
import Modal from '@molecules/Modal';
import CreditCardEditFormBox from '@organisms/CreditCardEditFormBox';
import Line from '@atoms/hr/Line';
import myColor from '@theme/color';
import styled from 'styled-components';
import CreditCard from '@molecules/CreditCard';
import * as Axios from '@utils/axios';
import * as API from '@utils/api';
// import { setPayment } from '@actions/payment/type';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';

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
  // const [newPayments, setNewPayments] = useState([]);
  const payments = useSelector((state: RootState) => state.payment.payment);

  // const dispatch = useDispatch();
  /*
  const changePayments = (newPayments: any) => {
    dispatch(setPayment(newPayments));
  }; */
  const title = '결제 수단 관리';

  const createButtonClick = async (name: any) => {
    const result = await Axios.postAxios(API.POST_PAYMENT, name);

    console.log(result);
  };

  const cardList = payments.map((cardName) => <CreditCard name={cardName.name} />);
  return (
    <Modal title={title}>
      <CreditCardEditFormBox buttonEvent={createButtonClick} />
      <Line widthPercent="110" height="0.25rem" lineColor={myColor.primary.lightGray} />
      <ScrollDiv>{cardList}</ScrollDiv>
    </Modal>
  );
};

export default CreditCardEditModal;
