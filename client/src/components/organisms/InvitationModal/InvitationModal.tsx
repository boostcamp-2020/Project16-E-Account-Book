import React, { useState } from 'react';
import Modal from '@molecules/Modal';
import Input from '@atoms/input/Input';
import RoundShortButton from '@atoms/button/RoundShortButton';
// import styled from 'styled-components';

const invitationModal: React.FC = () => {
  const [name, setName] = useState('');

  const searchHandler = (event: any) => {
    setName(event.target.value);
    // console.log(name);
  };

  const search = (info) => {
    console.log(info);
  };

  return (
    <Modal title="초대하기">
      ID 로 검색
      <Input value={name} onChange={searchHandler} />
      <RoundShortButton onClick={() => search(name)}>검색</RoundShortButton>
    </Modal>
  );
};

export default invitationModal;
