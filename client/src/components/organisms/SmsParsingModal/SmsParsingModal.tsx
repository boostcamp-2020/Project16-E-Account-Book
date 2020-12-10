/* eslint-disable prefer-destructuring */
import React, { useState } from 'react';
import Modal from '@molecules/Modal';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RoundLongButton from '@atoms/button/RoundLongButton';
import TextArea from '@atoms/textarea/TextArea';
import { hideModal } from '@actions/modal/type';
import { useDispatch } from 'react-redux';

interface props {
  setData: any;
}

const SmsParsingModal: React.FC<props> = ({ setData }: props) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(hideModal());
  };
  const title = 'SMS 입력하기';

  const changeHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = (parsedData) => {
    setData(parsedData);
  };

  const paymentList = [
    'SC제일',
    '카카오뱅크',
    '농협',
    'IBK기업',
    '하나은행',
    '우리',
    '국민',
    '대구',
    '부산',
    '광주',
    '새마을',
    '우체국',
    '신협',
    '저축은행',
    '신한',
  ];

  const parseSMS = (string) => {
    return string
      .replace(/\[web발신\]/i, '')
      .trim()
      .split(/[\s\n\r]/g)
      .filter((e) => e);
  };

  const solution = (sms) => {
    const newData: any = {};

    newData.cardName = undefined;
    paymentList.forEach((card) => {
      if (sms.match(card)) {
        newData.cardName = card;
      }
    });
    const parsedSMSDatas = parseSMS(sms);
    parsedSMSDatas.forEach((data) => {
      if (data.includes('원') && !newData.amount) {
        newData.amount = Number(data.match(/[0-9]+(,?[0-9]+)+/)[0].replace(',', ''));
        return;
      }
      if (data.includes(':')) {
        newData.time = data.match(/[0-9]{2}:[0-9]{2}/)[0];
      }
      if (data.includes('/')) {
        newData.date = data.match(/[0-9]{2}\/[0-9]{2}/)[0];
      }
    });
    return newData;
  };

  return (
    <Modal title={title}>
      <ColumnFlexContainer
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <TextArea width="100%" height="60%" value={message} onChange={changeHandler} />
        <RoundLongButton
          onClick={() => {
            submitHandler(solution(message));
            closeModal();
          }}
        >
          등록
        </RoundLongButton>
      </ColumnFlexContainer>
    </Modal>
  );
};

export default SmsParsingModal;
