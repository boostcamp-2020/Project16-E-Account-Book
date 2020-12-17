import React, { useState, useEffect } from 'react';
import Modal from '@molecules/Modal';
import Input from '@atoms/input/Input';
import RoundShortButton from '@atoms/button/RoundShortButton';
import * as API from '@utils/api';
import { getAxiosData } from '@utils/axios';
import UserInviteCard from '@molecules/UserInviteCard/UserInviteCard';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import styled from 'styled-components';
import MyColor from '@theme/color';
import getRandomKey from '@utils/random';

interface Props {
  socialId: number;
}

const Container = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;

const invitationModal: React.FC<Props> = ({ socialId }: Props) => {
  const [name, setName] = useState('');
  const [userList, setUserList] = useState<any>([]);
  const [waitedList, setWaitedList] = useState<any>([]);

  const searchHandler = (event: any) => {
    setName(event.target.value);
  };

  const searchUserList = async (userName: any) => {
    const result = await getAxiosData(API.GET_SEARCHED_USER_LIST(userName));
    setUserList(result.data);
  };

  const getWaitedUserList = async () => {
    const { data } = await getAxiosData(API.GET_SOCIAL_WAITING_USER_LIST(socialId));
    const newArgs: any = [];
    // eslint-disable-next-line array-callback-return
    data.map((ele) => {
      newArgs.push({
        id: ele.id,
        userId: ele.user_id,
        email: ele.email,
        name: ele.name,
        picture: ele.picture,
      });
    });
    setWaitedList(newArgs);
  };

  let userCards: any = userList.map((user) => (
    <RowFlexContainer>
      <UserInviteCard
        key={getRandomKey()}
        callback={getWaitedUserList}
        userId={user.id}
        bookId={socialId}
        name={user.name}
        link={user.picture}
        backgroundColor={MyColor.primary.skyblue}
        buttonName="초대하기"
      />
    </RowFlexContainer>
  ));

  let waitedCards: any = waitedList.map((user) => (
    <RowFlexContainer>
      <UserInviteCard
        key={getRandomKey()}
        callback={getWaitedUserList}
        stateId={user.id}
        userId={user.userId}
        bookId={socialId}
        name={user.name}
        link={user.picture}
        backgroundColor={MyColor.primary.mildGray}
        buttonName="취소"
      />
    </RowFlexContainer>
  ));

  useEffect(() => {
    getWaitedUserList();
    userCards = userList.map((user) => (
      <RowFlexContainer>
        <UserInviteCard
          key={getRandomKey()}
          callback={getWaitedUserList}
          userId={user.id}
          bookId={socialId}
          name={user.name}
          link={user.picture}
          backgroundColor={MyColor.primary.skyblue}
          buttonName="초대하기"
        />
      </RowFlexContainer>
    ));
    waitedCards = waitedList.map((user) => (
      <RowFlexContainer>
        <UserInviteCard
          key={getRandomKey()}
          callback={getWaitedUserList}
          stateId={user.id}
          userId={user.userId}
          bookId={socialId}
          name={user.name}
          link={user.picture}
          backgroundColor={MyColor.primary.mildGray}
          buttonName="취소"
        />
      </RowFlexContainer>
    ));
  }, [userList]);

  return (
    <Modal title="초대하기">
      <RowFlexContainer width="100%"> ID 로 검색</RowFlexContainer>
      <RowFlexContainer width="100%" justifyContent="space-between" padding="0 0 20px 0">
        <Input value={name} onChange={searchHandler} />
        <RoundShortButton onClick={() => searchUserList(name)}>검색</RoundShortButton>
      </RowFlexContainer>
      <Container>{userCards}</Container>
      <RowFlexContainer width="100%" margin="1rem 0">
        초대 대기 목록
      </RowFlexContainer>
      <Container>{waitedCards}</Container>
    </Modal>
  );
};

export default invitationModal;
