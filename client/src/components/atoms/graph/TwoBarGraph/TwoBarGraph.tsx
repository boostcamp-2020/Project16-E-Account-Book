import React from 'react';
import styled from 'styled-components';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import myColor from '@theme/color';
import { numberToMoney } from '@utils/number';

interface Props {
  maxHeight: number;
  income: number;
  expend: number;
}

interface BarProps {
  height: number;
}

const WhiteBar = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 10px;
  background: #dedede;
  box-shadow: inset 5px 5px 7px #6b6b6b, inset -5px -5px 7px #ffffff;
  display: flex;
  align-items: flex-end;
`;

const IncomeBar = styled.div<BarProps>`
  width: 100%;
  height: ${(props) => props.height}%;
  min-height: 10%;
  border-radius: 10px;
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
  width: 100%;
  height: ${(props) => props.height}%;
  min-height: 10%;
  border-radius: 10px;
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

const TwoBarGraph: React.FC<Props> = ({ maxHeight, income, expend }: Props) => {
  return (
    <RowFlexContainer width="100%" height="100%" alignItems="center" justifyContent="space-around">
      <WhiteBar>
        <IncomeBar height={(income / maxHeight) * 100}>
          <div>{numberToMoney(income)}</div>
        </IncomeBar>
      </WhiteBar>
      <WhiteBar>
        <ExpendBar height={(expend / maxHeight) * 100}>
          <div>{numberToMoney(expend)}</div>
        </ExpendBar>
      </WhiteBar>
    </RowFlexContainer>
  );
};

export default TwoBarGraph;
