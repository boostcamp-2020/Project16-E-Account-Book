import React from 'react';
import styled from 'styled-components';

interface Props extends SVGProps {
  data: any;
  colors: string[];
}

interface SVGProps {
  size?: number;
}

const defaultProps = {
  size: 500,
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
  xmlns: http://www.w3.org/2000/svg';
`;

const RowBarGraph: React.FC<Props> = ({ size, data, colors }: Props) => {
  const toXY = (cX: number, cY: number, r: number, degrees: number) => {
    const rad = (degrees * Math.PI) / 180.0;
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

  const pieComponent = (key: string, color: string, start: number, end: number) => {
    const chartSize = Math.round(size / 2);
    return (
      <path
        key={key}
        fill={color}
        d={toPieChartItemPath(chartSize, chartSize, 100, 240, start, end)}
      />
    );
  };

  const drawPieChart = () => {
    const pieComponents: any[] = [];
    let radiusSum = 0;
    data.forEach((element, index) => {
      const radius = element.percent * 3.6;
      const component = pieComponent(element.name, colors[index], radiusSum, radiusSum + radius);
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

RowBarGraph.defaultProps = defaultProps;

export default RowBarGraph;
