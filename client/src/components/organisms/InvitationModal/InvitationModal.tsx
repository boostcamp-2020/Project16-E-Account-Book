import React, { useState, useEffect } from 'react';
import Modal from '@molecules/Modal';
import Input from '@atoms/input/Input';
import RoundShortButton from '@atoms/button/RoundShortButton';
import * as API from '@utils/api';
import { getAxiosData } from '@utils/axios';
import UserInviteCard from '@molecules/UserInviteCard/UserInviteCard';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import styled from 'styled-components';
import MyColor from '@theme/color';

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

  const getWaitedUserList = (socialAccountBookId) => {
    // TODO AXIOS 로 social ID 를 통해 대기중인 유저 LIST 가져오기
    console.log(socialAccountBookId);
    const result = [
      {
        id: 23,
        email: 'vnslt0152@gmail.com',
        name: 'JunYoung Jang',
        picture: 'https://avatars0.githubusercontent.com/u/61405355?v=4',
      },
      {
        id: 24,
        email: 'kjha2142@gmail.com',
        name: 'Jaehee Kim',
        picture: 'https://avatars2.githubusercontent.com/u/40454769?v=4',
      },
      {
        id: 25,
        email: 'maong0927@gmail.com',
        name: 'Hera',
        picture: 'https://avatars3.githubusercontent.com/u/20068470?v=4',
      },
    ];
    setWaitedList(result);
  };

  const callback = () => {
    return true;
  };

  let userCards: any = userList.map((user) => (
    <RowFlexContainer>
      <UserInviteCard
        key={user.id}
        id={user.id}
        bookId={socialId}
        name={user.name}
        link={user.picture}
        callback={callback}
        backgroundColor={MyColor.primary.skyblue}
        buttonName="초대하기"
      />
    </RowFlexContainer>
  ));

  let waitedCards: any = waitedList.map((user) => (
    <RowFlexContainer>
      <UserInviteCard
        key={user.id}
        id={user.id}
        bookId={socialId}
        name={user.name}
        link={user.picture}
        callback={callback}
        backgroundColor={MyColor.primary.mildGray}
        buttonName="취소"
      />
    </RowFlexContainer>
  ));

  useEffect(() => {
    getWaitedUserList(socialId);
    userCards = userList.map((user) => (
      <RowFlexContainer>
        <UserInviteCard
          key={user.id}
          id={user.id}
          bookId={socialId}
          name={user.name}
          link={user.picture}
          callback={callback}
          backgroundColor={MyColor.primary.skyblue}
          buttonName="초대하기"
        />
      </RowFlexContainer>
    ));
    waitedCards = waitedList.map((user) => (
      <RowFlexContainer>
        <UserInviteCard
          key={user.id}
          id={user.id}
          bookId={socialId}
          name={user.name}
          link={user.picture}
          callback={callback}
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
      <ColumnFlexContainer width="100%" alignContent="center">
        초대 대기 목록
      </ColumnFlexContainer>
      <Container>{waitedCards}</Container>
    </Modal>
  );
};

export default invitationModal;
