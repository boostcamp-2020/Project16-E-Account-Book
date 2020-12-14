import React from 'react';
import styled from 'styled-components';
import UserImage from '@atoms/img/UserImage/UserImage';
import Name from '@atoms/p/CenterNormalText/CenterNormalText';
import RoundShortButton from '@atoms/button/RoundShortButton';

interface Props {
  link: string;
  id: number;
  name: string;
  callback: (boolean) => void;
}

const UserInviteCard = styled.div`
  background-color: green;
`;

const userInviteCard: React.FC<Props> = ({ link, id, name, callback }: Props) => {
  console.log(id);
  return (
    <UserInviteCard>
      <UserImage link={link} />
      <Name>{name}</Name>
      <RoundShortButton onClick={() => callback(true)}>초대하기</RoundShortButton>
    </UserInviteCard>
  );
};

export default userInviteCard;
