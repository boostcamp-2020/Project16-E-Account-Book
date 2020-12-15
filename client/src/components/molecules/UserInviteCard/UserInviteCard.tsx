import React from 'react';
import UserImage from '@atoms/img/UserImage/UserImage';
import Name from '@atoms/p/CenterNormalText/CenterNormalText';
import RoundShortButton from '@atoms/button/RoundShortButton';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import * as API from '@utils/api';
import { postAxios } from '@utils/axios';

interface Props {
  link: string;
  stateId?: number;
  userId: number;
  bookId: number;
  name: string;
  backgroundColor: string;
  buttonName: string;
}

const userInviteCard: React.FC<Props> = ({
  link,
  stateId,
  userId,
  bookId,
  name,
  backgroundColor,
  buttonName,
}: Props) => {
  console.log(stateId, userId, bookId);

  // TODO onclick 에 id, bookid, 취소인지 초대하기인지 넘겨주기 ? Axios 로 데이터 보내기
  const setInvite = async () => {
    const data = {
      userId,
      accountbookId: bookId,
    };
    const result = await postAxios(API.POST_SOCIAL_INVITATION, data);
    console.log(data, result);
  };

  return (
    <RowFlexContainer
      justifyContent="space-between"
      backgroundColor={backgroundColor}
      padding="10px 10px"
      margin="5px"
      alignItems="center"
      borderRadius="10px"
    >
      <UserImage link={link} />
      <Name fontSize="10px">{name}</Name>
      <RoundShortButton onClick={() => setInvite()}>{buttonName}</RoundShortButton>
    </RowFlexContainer>
  );
};

export default userInviteCard;
