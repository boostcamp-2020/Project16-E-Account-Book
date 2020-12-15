import React from 'react';
import UserImage from '@atoms/img/UserImage/UserImage';
import Name from '@atoms/p/CenterNormalText/CenterNormalText';
import RoundShortButton from '@atoms/button/RoundShortButton';
import RowFlexContainer from '@atoms/div/RowFlexContainer';

interface Props {
  link: string;
  id: number;
  bookId: number;
  name: string;
  callback: (boolean) => void;
  backgroundColor: string;
  buttonName: string;
}

const userInviteCard: React.FC<Props> = ({
  link,
  id,
  bookId,
  name,
  callback,
  backgroundColor,
  buttonName,
}: Props) => {
  console.log(id, bookId);

  // TODO onclick 에 id, bookid, 취소인지 초대하기인지 넘겨주기 ? Axios 로 데이터 보내기

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
      <RoundShortButton onClick={() => callback(true)}>{buttonName}</RoundShortButton>
    </RowFlexContainer>
  );
};

export default userInviteCard;
