import React from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import LeftNormalText from '@atoms/p/LeftNormalText';
import myColor from '@theme/color';
import UserImages from '@molecules/UserImages';
import SquircleCard from '@atoms/div/SquircleCard';
import SquircleShortButton from '@atoms/button/SquircleShortButton';
import { showModal } from '@actions/modal/type';
import { useDispatch } from 'react-redux';

interface Props {
  links: string[];
  backgroundColor: string;
  name: string;
}

interface squircleCardProps {
  width: string;
  height: string;
  backgroundColor: string;
  flexFlow: string;
}

const InviteAccountbookCard: React.FC<Props> = ({ links, backgroundColor, name }: Props) => {
  const dispatch = useDispatch();

  const openModal = (view: string) => {
    dispatch(showModal(view));
  };

  const squircleCardArgs: squircleCardProps = {
    width: '100%',
    height: '10rem',
    backgroundColor,
    flexFlow: 'column',
  };

  return (
    <SquircleCard {...squircleCardArgs}>
      <ColumnFlexContainer width="100%" height="100%">
        <RowFlexContainer width="100%" height="30%">
          <LeftNormalText fontWeight="bold" color={myColor.primary.black}>
            사용자
          </LeftNormalText>
        </RowFlexContainer>
        <RowFlexContainer justifyContent="space-between" width="100%" height="70%">
          <UserImages links={links} />
          {name}
          <SquircleShortButton onClick={() => openModal('InvitationModal')}>
            초대하기
          </SquircleShortButton>
        </RowFlexContainer>
      </ColumnFlexContainer>
    </SquircleCard>
  );
};
export default InviteAccountbookCard;
