import React from 'react';
import styled from 'styled-components';

interface Props extends DescriptionProps, BoxProps {
  description: string;
}

interface DescriptionProps {
  color: string;
}

interface BoxProps {
  color: string;
  checked: boolean;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const CheckBox = styled.div`
  display: flex;
  flex-flow: row;
  width: 3.5rem;
  justify-content: space-between;
  align-items: center;
`;

const Mark = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`;

const Hidden = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Box = styled.div<BoxProps>`
  display: inline-block;
  width: 17px;
  height: 17px;
  background: ${(props: BoxProps) => (props.checked ? props.color : 'white')};
  border-width: 2px;
  border-color: ${(props: BoxProps) => props.color};
  border-style: solid;
  border-radius: 3px;

  ${Mark} {
    visibility: ${(props: BoxProps) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const Description = styled.div<DescriptionProps>`
  padding: auto;
  color: ${(props: DescriptionProps) => props.color};
  font-size: 15px;
`;

const Checkbox: React.FC<Props> = ({ onClick, checked, description, color }: Props) => {
  return (
    <CheckBox>
      <Hidden checked={checked} />
      <Box checked={checked} color={color} onClick={onClick}>
        <Mark viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Mark>
      </Box>
      <Description color={color}> {description}</Description>
    </CheckBox>
  );
};

export default Checkbox;
