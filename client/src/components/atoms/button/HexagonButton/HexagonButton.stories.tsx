import React from 'react';
import myColor from '@theme/color';
import SVG from '@svg/check-piggy-bank.svg';
import HexagonButton from './HexagonButton';

interface Props {
  name: string;
  color: string;
}

export default {
  title: 'Atoms/button/HexagonButton',
  component: HexagonButton,
  argTypes: {
    name: { control: 'text' },
    color: { control: 'color' },
  },
};

const onClick = (): boolean => {
  return true;
};

export const hexagonButtonButton = ({ name, color }: Props): JSX.Element => {
  const svgIcon = <SVG width={40} height={40} fill={myColor.primary.brown} />;
  return <HexagonButton name={name} color={color} svgIcon={svgIcon} onClick={onClick} />;
};

hexagonButtonButton.story = {
  name: 'HexagonButton',
};

hexagonButtonButton.args = {
  name: '가계부 승인/거절',
  color: myColor.primary.main,
};
