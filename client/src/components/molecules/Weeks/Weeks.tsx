import React from 'react';
import styled from 'styled-components';

interface Props extends SizeProps, textProps {
  startDay: string;
}

interface SizeProps {
  width: string;
  height: string;
}

interface textProps {
  color: string;
}

const defaultProps = {
  startDay: '월',
  width: '400px',
  height: '30px',
};

const Weeks = styled.div<SizeProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 2px solid yellow;
  border-radius: 3px;
  box-sizing: border-box;
`;

const Day = styled.div<textProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid pink;
  color: ${(props) => props.color};
`;

const changeStartDay = (startDay: string, startDayArray: string[]) => {
  return startDay === '월' ? startDayArray.slice(1) : startDayArray.slice(0, 7);
};

const startDayArray = ['일', '월', '화', '수', '목', '금', '토', '일'];
const weeks: React.FC<Props> = ({ startDay, width, height, color }: Props) => {
  const dayArray = changeStartDay(startDay, startDayArray);
  return (
    <Weeks width={width} height={height}>
      {dayArray.map((ele: string) => {
        if (ele === '일') {
          return <Day color="red">{ele}</Day>;
        }
        if (ele === '토') {
          return <Day color="blue">{ele}</Day>;
        }
        return <Day color={color}>{ele}</Day>;
      })}
    </Weeks>
  );
};

Weeks.defaultProps = defaultProps;

export default weeks;
