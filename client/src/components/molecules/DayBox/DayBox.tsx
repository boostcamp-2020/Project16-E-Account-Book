import React from 'react';
import styled from 'styled-components';
import InText from '@atoms/p/IncomeText';
import ExText from '@atoms/p/ExpenditureText';

interface Props extends SizeProps, TextProps {
  date: number;
  onClick: () => void;
  InMoney: number;
  ExMoney: number;
}

interface SizeProps {
  width: string;
  height: string;
}

interface TextProps {
  fontSize: string;
  fontWeight: string;
  InColor: string;
  ExColor: string;
}

const defaultProps = {
  width: '60px',
  height: '90px',
};

const DayBox = styled.div<SizeProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid pink;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
`;

const dayBox: React.FC<Props> = ({
  width,
  height,
  date,
  onClick,
  InMoney,
  ExMoney,
  InColor,
  ExColor,
  fontWeight,
  fontSize,
}: Props) => {
  return (
    <DayBox width={width} height={height} onClick={onClick}>
      {date}
      <InText money={InMoney} fontWeight={fontWeight} fontSize={fontSize} color={InColor} />
      <ExText money={ExMoney} fontWeight={fontWeight} fontSize={fontSize} color={ExColor} />
    </DayBox>
  );
};

DayBox.defaultProps = defaultProps;

export default dayBox;
