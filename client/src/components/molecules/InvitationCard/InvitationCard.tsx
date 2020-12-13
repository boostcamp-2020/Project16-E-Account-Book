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
  master: string;
  name: string;
  time: string;
  callback: (isAccept: boolean) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${color.primary.gray};
  padding: 10px 10px 20px;
`;

const InvitationCard: React.FC<Props> = ({ master, name, time, callback }: Props) => {
  return (
    <Container>
      <RowContainer justifyContent="flex-end">
        <RightText color={color.primary.gray}>{getPastTimeString(time)}</RightText>
      </RowContainer>
      <RowContainer margin="10px 0">
        <Text>
          {master} 님이 <BlueText color={color.primary.accent}>{name}</BlueText> 가계부에
          초대하셨습니다.
        </Text>
      </RowContainer>
      <RowContainer justifyContent="space-around">
        <Button onClick={() => callback(true)}>수락</Button>
        <Button
          onClick={() => callback(false)}
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
