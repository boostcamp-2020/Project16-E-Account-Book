import React from 'react';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import LeftNormalText from '@atoms/p/LeftNormalText';
import myColor from '@theme/color';
import SquircleCard from '@atoms/div/SquircleCard';
import ColorLabel from '@atoms/div/ColorLabel';
import SquircleShortButton from '@atoms/button/SquircleShortButton';
import { showModal } from '@actions/modal/type';
import { useDispatch } from 'react-redux';

interface Props {
  labelColor: string;
}

interface squircleCardProps {
  width: string;
  height: string;
  backgroundColor: string;
  flexFlow: string;
}

const squircleCardArgs: squircleCardProps = {
  width: '90%',
  height: '8rem',
  backgroundColor: myColor.primary.white,
  flexFlow: 'column',
};

const ChangeAccountbookColorCard: React.FC<Props> = ({ labelColor }: Props) => {
  const dispatch = useDispatch();

  const openModal = (view: string) => {
    dispatch(showModal(view));
  };

  return (
    <SquircleCard {...squircleCardArgs}>
      <ColumnFlexContainer width="100%" height="100%">
        <RowFlexContainer width="100%" height="30%">
          <LeftNormalText fontWeight="bold" color={myColor.primary.black}>
            색상
          </LeftNormalText>
        </RowFlexContainer>
        <RowFlexContainer justifyContent="space-between" width="100%" height="70%">
          <ColorLabel backgroundColor={labelColor} />
          <SquircleShortButton onClick={() => openModal('CreateAccountbookColor')}>
            변경하기
          </SquircleShortButton>
        </RowFlexContainer>
      </ColumnFlexContainer>
    </SquircleCard>
  );
};

export default ChangeAccountbookColorCard;
