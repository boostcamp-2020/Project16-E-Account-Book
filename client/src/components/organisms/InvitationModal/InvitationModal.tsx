import React, { useState } from 'react';
import Modal from '@molecules/Modal';
import Input from '@atoms/input/Input';
import RoundShortButton from '@atoms/button/RoundShortButton';
import * as API from '@utils/api';
import { getAxiosData } from '@utils/axios';
// import styled from 'styled-components';

const invitationModal: React.FC = () => {
  const [name, setName] = useState('');

  const searchHandler = (event: any) => {
    setName(event.target.value);
    // console.log(name);
  };

  const searchUserList = async (userName) => {
    const userList = await getAxiosData(API.GET_SEARCHED_USER_LIST(userName));
    return userList;
  };

  const search = (info) => {
    const data = searchUserList(info);
    console.log(data);
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
