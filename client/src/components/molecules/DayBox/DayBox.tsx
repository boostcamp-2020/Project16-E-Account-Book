import React from 'react';
import styled, { keyframes } from 'styled-components';
import InText from '@atoms/p/IncomeText';
import ExText from '@atoms/p/ExpenditureText';
import myColor from '@theme/color';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';

interface Props extends SizeProps, TextProps {
  date: number;
  onClick: () => void;
  InMoney: number;
  ExMoney: number;
  inCheck?: boolean;
  exCheck?: boolean;
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
  inCheck: true,
  exCheck: true,
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const DayBox = styled.div<SizeProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  font-family: MapoGoldenPier;
  &:hover {
    background-color: ${myColor.calendar.main};
    animation: ${rotate} 0.5s;
    transform: scale(1.6);
  }
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
  inCheck,
  exCheck,
}: Props) => {
  return (
    <DayBox width={width} height={height} onClick={onClick}>
      {date !== 0 ? (
        <>
          <ColumnFlexContainer height="100%" justifyContent="space-between" alignItems="center">
            <div>{date}</div>
            <div>
              {inCheck && (
                <InText
                  money={InMoney}
                  fontWeight={fontWeight}
                  fontSize={fontSize}
                  color={InColor}
                />
              )}
              {exCheck && (
                <ExText
                  money={ExMoney}
                  fontWeight={fontWeight}
                  fontSize={fontSize}
                  color={ExColor}
                />
              )}
            </div>
          </ColumnFlexContainer>
        </>
      ) : (
        <></>
      )}
    </DayBox>
  );
};

DayBox.defaultProps = defaultProps;

export default dayBox;
