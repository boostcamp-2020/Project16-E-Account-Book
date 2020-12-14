import React, { useState, useEffect } from 'react';
import Modal from '@molecules/Modal';
import Input from '@atoms/input/Input';
import RoundShortButton from '@atoms/button/RoundShortButton';
import * as API from '@utils/api';
import { getAxiosData } from '@utils/axios';
import UserInviteCard from '@molecules/UserInviteCard/UserInviteCard';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
// import styled from 'styled-components';

const invitationModal: React.FC = () => {
  const [name, setName] = useState('');
  const [userList, setUserList] = useState<any>([]);

  const searchHandler = (event: any) => {
    setName(event.target.value);
  };

  const searchUserList = async (userName: any) => {
    const result = await getAxiosData(API.GET_SEARCHED_USER_LIST(userName));
    setUserList(result.data);
  };

  const callback = () => {
    return true;
  };

  let userCards: any = userList.map((user) => (
    <RowFlexContainer>
      <UserInviteCard
        key={user.id}
        id={user.id}
        name={user.name}
        link={user.picture}
        callback={callback}
      />
    </RowFlexContainer>
  ));

  useEffect(() => {
    userCards = userList.map((user) => (
      <RowFlexContainer>
        <UserInviteCard
          key={user.id}
          id={user.id}
          name={user.name}
          link={user.picture}
          callback={callback}
        />
      </RowFlexContainer>
    ));
  }, [userList]);

  return (
    <Modal title="초대하기">
      <>
        ID 로 검색
        <Input value={name} onChange={searchHandler} />
        <RoundShortButton onClick={() => searchUserList(name)}>검색</RoundShortButton>
        {userCards}
      </>
    </Modal>
  );
};

export default invitationModal;
