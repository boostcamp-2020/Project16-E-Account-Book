import React from 'react';
import styled from 'styled-components';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import myColor from '@theme/color';
import ntm from '@utils/numberToMoney';

interface Props {
  maxWidth: number;
  type: string;
  amount: number;
}

interface BarProps {
  width: number;
}

const WhiteBar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: #dedede;
  box-shadow: inset 5px 5px 7px #6b6b6b, inset -5px -5px 7px #ffffff;
  display: flex;
  align-items: flex-end;
`;

const IncomeBar = styled.div<BarProps>`
  width: ${(props) => props.width}%;
  height: 100%;
  min-width: 10%;
  border-radius: 9px;
  background: linear-gradient(145deg, #ffd03d, #dcaf33);
  display: block;
  position: relative;

  & > div {
    position: absolute;
    display: none;
    padding: 5px;
    top: -30px;
    box-sizing: border-box;
    border-radius: 14px;
    background-color: ${myColor.primary.white};
    font-size: 0.6rem;
    color: ${myColor.primary.main};
    justify-content: center;
    z-index: 3;
  }

  &:hover {
    & > div {
      display: block;
    }
  }

  &:focus {
    & > div {
      display: block;
    }
  }
`;

const ExpendBar = styled.div<BarProps>`
  width: ${(props) => props.width}%;
  height: 100%;
  min-width: 10%;
  border-radius: 9px;
  background: linear-gradient(145deg, #5f61f8, #5052d1);
  display: block;
  position: relative;

  & > div {
    position: absolute;
    display: none;
    padding: 5px;
    top: -30px;
    box-sizing: border-box;
    border-radius: 14px;
    background-color: ${myColor.primary.white};
    font-size: 0.6rem;
    color: ${myColor.primary.accent};
    justify-content: center;
    z-index: 3;
  }

  &:hover {
    & > div {
      display: block;
    }
  }

  &:focus {
    & > div {
      display: block;
    }
  }
`;

const RowBarGraph: React.FC<Props> = ({ maxWidth, amount, type }: Props) => {
  return (
    <ColumnFlexContainer width="100%" height="100%" alignItems="center">
      <WhiteBar>
        {type === 'income' ? (
          <IncomeBar width={(amount / maxWidth) * 100}>
            <div>{ntm.number2Money(amount)}</div>
          </IncomeBar>
        ) : (
          <ExpendBar width={(amount / maxWidth) * 100}>
            <div>{ntm.number2Money(amount)}</div>
          </ExpendBar>
        )}
      </WhiteBar>
    </ColumnFlexContainer>
  );
};

export default RowBarGraph;
