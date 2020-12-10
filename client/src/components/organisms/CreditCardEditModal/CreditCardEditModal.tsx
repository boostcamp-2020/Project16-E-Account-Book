import React from 'react';
import Modal from '@molecules/Modal';
import CreditCardEditFormBox from '@organisms/CreditCardEditFormBox';
import Line from '@atoms/hr/Line';
import myColor from '@theme/color';
import styled from 'styled-components';
import CreditCard from '@molecules/CreditCard';

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
  const title = '결제 수단 관리';

  const createButtonClick = async (data: any) => {
    /* const data = {
      name,
      description,
      usersList,
      color,
    };
    const result = await Axios.postAxios(API.POST_CREATE_SOCIAL, data); */
    console.log(data);
  };
  const cardNameList = ['신한카드', '하나카드', '카카오페이', '신한카드', '하나카드', '카카오페이'];
  const cardList = cardNameList.map((cardName) => <CreditCard name={cardName} />);
  return (
    <Modal title={title}>
      <CreditCardEditFormBox buttonEvent={createButtonClick} />
      <Line widthPercent="110" height="0.25rem" lineColor={myColor.primary.lightGray} />
      <ScrollDiv>{cardList}</ScrollDiv>
    </Modal>
  );
};

export default CreditCardEditModal;
