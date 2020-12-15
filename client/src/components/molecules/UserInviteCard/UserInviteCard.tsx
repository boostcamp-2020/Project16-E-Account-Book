import React from 'react';
import UserImage from '@atoms/img/UserImage/UserImage';
import Name from '@atoms/p/CenterNormalText/CenterNormalText';
import RoundShortButton from '@atoms/button/RoundShortButton';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import * as API from '@utils/api';
import { postAxios, deleteAxios } from '@utils/axios';

interface Props {
  link: string;
  stateId?: number;
  userId: number;
  bookId: number;
  name: string;
  callback: any;
  backgroundColor: string;
  buttonName: string;
}

const userInviteCard: React.FC<Props> = ({
  link,
  stateId,
  userId,
  bookId,
  name,
  callback,
  backgroundColor,
  buttonName,
}: Props) => {
  const setInvite = async () => {
    if (stateId) {
      await deleteAxios(API.DELETE_SOCIAL_INVITATION(stateId));
    } else {
      const data = {
        userId,
        accountbookId: bookId,
      };
      await postAxios(API.POST_SOCIAL_INVITATION, data);
    }
    callback();
  };

  return (
    <RowFlexContainer
      justifyContent="space-between"
      backgroundColor={backgroundColor}
      padding="10px 10px"
      margin="5px 0 5px 0"
      alignItems="center"
      borderRadius="10px"
    >
      <UserImage link={link} />
      <Name fontSize="14px">{name}</Name>
      <RoundShortButton onClick={() => setInvite()}>{buttonName}</RoundShortButton>
    </RowFlexContainer>
  );
};

export default userInviteCard;
