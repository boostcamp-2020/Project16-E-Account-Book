import React from 'react';
import styled from 'styled-components';
import RowContainer from '@atoms/div/RowFlexContainer';
import RightText from '@atoms/p/RightSmallText';
import Text from '@atoms/p/LeftNormalText';
import BlueText from '@atoms/span/BoldSpan';
import Button from '@atoms/button/RoundButton';
import color from '@theme/color';
import { getPastTimeString } from '@utils/date';

interface Props {
  id: number;
  master: string;
  name: string;
  time: string;
  callback: (id: number, isAccept: boolean) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${color.primary.lightGray};
  padding: 10px 10px 20px;
  width: 100%;
  box-sizing: border-box;
`;

const InvitationCard: React.FC<Props> = ({ id, master, name, time, callback }: Props) => {
  return (
    <Container>
      <RowContainer justifyContent="flex-end">
        <RightText color={color.primary.gray}>{getPastTimeString(time)}</RightText>
      </RowContainer>
      <RowContainer margin="10px 0">
        <Text wordBreak="break-all">
          {master} 님이 <BlueText color={color.primary.accent}>{name}</BlueText> 가계부에
          초대하셨습니다.
        </Text>
      </RowContainer>
      <RowContainer justifyContent="space-around">
        <Button onClick={() => callback(id, true)}>수락</Button>
        <Button
          onClick={() => callback(id, false)}
          backgroundColor={color.primary.lightGray}
          color={color.primary.black}
        >
          거절
        </Button>
      </RowContainer>
    </Container>
  );
};
export default InvitationCard;
