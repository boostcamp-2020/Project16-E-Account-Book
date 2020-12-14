import React from 'react';
// import styled from 'styled-components';
import UserImage from '@atoms/img/UserImage/UserImage';
import Name from '@atoms/p/CenterNormalText/CenterNormalText';
import RoundShortButton from '@atoms/button/RoundShortButton';
import RowFlexContainer from '@atoms/div/RowFlexContainer';

interface Props {
  link: string;
  id: number;
  name: string;
  callback: (boolean) => void;
}

const userInviteCard: React.FC<Props> = ({ link, id, name, callback }: Props) => {
  console.log(id);
  return (
    <RowFlexContainer justifyContent="space-between">
      <UserImage link={link} />
      <Name>{name}</Name>
      <RoundShortButton onClick={() => callback(true)}>초대하기</RoundShortButton>
    </RowFlexContainer>
  );
};

export default userInviteCard;
