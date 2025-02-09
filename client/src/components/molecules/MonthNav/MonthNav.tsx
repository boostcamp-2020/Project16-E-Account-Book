import React from 'react';
import styled from 'styled-components';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import Button from '@atoms/button/TextButton';
import Text from '@atoms/p/CenterNormalText';
import myColor from '@theme/color';
import { subMonth, addMonth } from '@actions/date/type';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@reducers/rootReducer';

const MonthTextContainer = styled.div`
  flex: 1;
`;

const MonthNav: React.FC = () => {
  const year = useSelector((state: RootState) => state.date.year);
  const month = useSelector((state: RootState) => state.date.month);
  const dispatch = useDispatch();

  const preMonth = () => {
    dispatch(subMonth());
  };

  const nextMonth = () => {
    dispatch(addMonth());
  };

  return (
    <RowFlexContainer
      width="100%"
      position="fixed"
      zIndex="7"
      padding="5px 0 0 0"
      margin="2px 0 5px 0"
      backgroundColor={myColor.primary.white}
    >
      <Button
        color={myColor.primary.black}
        onClick={preMonth}
        padding="2px 8px"
        width="20%"
        height="100%"
      >
        &lt;
      </Button>
      <MonthTextContainer>
        <Text>{`${year}년 ${month}월`}</Text>
      </MonthTextContainer>
      <Button
        color={myColor.primary.black}
        onClick={nextMonth}
        padding="2px 8px"
        width="20%"
        height="100%"
      >
        &gt;
      </Button>
    </RowFlexContainer>
  );
};

export default MonthNav;
