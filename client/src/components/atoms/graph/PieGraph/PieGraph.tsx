import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';
import getRandomKey from '@utils/random';
import { numberToMoney } from '@utils/number';

interface Props extends SVGProps, GroupProps, PathProps {
  data: any;
  colors: string[];
}

interface SVGProps {
  size: number;
}

interface GroupProps {
  fontColor?: string;
}

interface PathProps {
  backgroundColor?: string;
}

const defaultProps = {
  fontColor: myColor.primary.black,
  backgroundColor: 'white',
};

const SVG = styled.svg<SVGProps>`
  display: block;
  margin: 0px;
  padding: 0px;
  border: 0px;
  version: 1.1;
  baseProfile: full;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  viewBox: 0 0 ${(props) => props.size} ${(props) => props.size};
  xmlns: http://www.w3.org/2000/svg';
`;

const Group = styled.g<GroupProps>`
  &:hover,
  &:active {
    text {
      display: block;
    }
  }

  text {
    fill: ${(props) => props.fontColor};
  }
`;

const Text = styled.text`
  display: none;
  font-size: 16px;
  text-anchor: middle;
`;

const PercentText = styled.text`
  display: none;
  stroke: ${myColor.primary.reject};
  stroke-width: 4;
  font-size: 36px;
  text-anchor: middle;
`;

const Path = styled.path<PathProps>`
  stroke: ${(props) => props.color};
  &:hover,
  &:active {
    position: relative;
    stroke: ${(props) => props.backgroundColor};
    stroke-width: 20;
  }
`;

const PieGraph: React.FC<Props> = ({ size, data, colors, fontColor, backgroundColor }: Props) => {
  const toXY = (cX: number, cY: number, r: number, degrees: number) => {
    const rad = ((degrees - 90) * Math.PI) / 180.0;
    return {
      x: cX + r * Math.cos(rad),
      y: cY + r * Math.sin(rad),
    };
  };

  const toPieChartItemPath = (
    x: number,
    y: number,
    radiusIn: number,
    radiusOut: number,
    startAngle: number,
    endAngle: number,
  ) => {
    const startIn = toXY(x, y, radiusIn, endAngle);
    const endIn = toXY(x, y, radiusIn, startAngle);
    const startOut = toXY(x, y, radiusOut, endAngle);
    const endOut = toXY(x, y, radiusOut, startAngle);
    const arcSweep = endAngle - startAngle <= 180 ? '0' : '1';
    const d = [
      'M',
      startIn.x,
      startIn.y,
      'L',
      startOut.x,
      startOut.y,
      'A',
      radiusOut,
      radiusOut,
      0,
      arcSweep,
      0,
      endOut.x,
      endOut.y,
      'L',
      endIn.x,
      endIn.y,
      'A',
      radiusIn,
      radiusIn,
      0,
      arcSweep,
      1,
      startIn.x,
      startIn.y,
      'z',
    ].join(' ');
    return d;
  };

  const pieComponent = (
    info: string,
    color: string,
    start: number,
    end: number,
    percent: number,
  ) => {
    const chartSize = Math.round(size / 2);
    const radiusIn = Math.round(size / 5);
    const radiusOut = Math.round(size / 2.2);
    return (
      <Group fontColor={fontColor} key={getRandomKey()}>
        <Path
          backgroundColor={backgroundColor}
          color={color}
          key={getRandomKey()}
          fill={color}
          d={toPieChartItemPath(chartSize, chartSize, radiusIn, radiusOut, start, end)}
        />
        <Text x="50%" y="45%">
          {info}
        </Text>
        <PercentText x="50%" y="55%">
          {Math.round(percent)} %
        </PercentText>
      </Group>
    );
  };

  const drawPieChart = () => {
    const pieComponents: any[] = [];
    let radiusSum = 0;
    data.forEach((element, index) => {
      const { name, money, percent } = element;
      const radius = percent * 3.6;
      const info = `${name} : ${numberToMoney(money)} 원`;
      const component = pieComponent(info, colors[index], radiusSum, radiusSum + radius, percent);
      pieComponents.push(component);
      radiusSum += radius;
    });

    return pieComponents;
  };
  return (
    <>
      <SVG size={size}>{drawPieChart()}</SVG>
    </>
  );
};

PieGraph.defaultProps = defaultProps;

export default PieGraph;
