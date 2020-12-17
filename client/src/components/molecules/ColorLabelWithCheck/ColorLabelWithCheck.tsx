import React from 'react';
import ColorLabel from '@atoms/div/ColorLabel';
import CheckSVG from '@svg/check.svg';
import colorUtils from '@utils/color';

interface Props extends SizeProps {
  backgroundColor: string;
  buttonEvent?: (data) => void;
}

interface SizeProps {
  size?: string;
}

const defaultProps = {
  size: '2rem',
  buttonEvent: undefined,
};

const ColorLabelWithCheck: React.FC<Props> = ({ backgroundColor, ...args }: Props) => {
  return (
    <ColorLabel backgroundColor={backgroundColor} {...args}>
      <CheckSVG width="70%" height="70%" fill={colorUtils.getFontColor(backgroundColor)} />
    </ColorLabel>
  );
};

ColorLabelWithCheck.defaultProps = defaultProps;

export default ColorLabelWithCheck;
