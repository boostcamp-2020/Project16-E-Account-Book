import React from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';
import { Link } from 'react-router-dom';

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  border: 0px;
  cursor: pointer;
`;

const Svg = styled.svg`
  display: block;
  margin: 0px;
  padding: 0px;
  border: 0px;
  version: 1.1;
  baseProfile: full;
  width: 100%;
  height: 100%;
  xmlns: http://www.w3.org/2000/svg';
`;

interface Props {
  link: string;
}

const defaultProps = {};

const CreateButton: React.FC<Props> = ({ link }: Props) => {
  return (
    <Button>
      <Link to={link}>
        <Svg>
          <defs>
            <filter
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="objectBoundingBox"
              id="shadow-filter"
            >
              <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
              <feColorMatrix
                values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0"
                in="shadowBlurOuter1"
                type="matrix"
                result="shadowMatrixOuter1"
              />
              <feMerge>
                <feMergeNode in="shadowMatrixOuter1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polygon
            width="100%"
            height="100%"
            points="15 7 35 7 45 25 35 43 15 43 5 25"
            fill={myColor.primary.main}
            stroke={myColor.primary.kakaoBlack}
            strokeWidth="2"
            filter="url(#shadow-filter)"
          />
          <line x1="20" x2="30" y1="25" y2="25" stroke={myColor.primary.brown} strokeWidth="2" />
          <line x1="25" x2="25" y1="20" y2="30" stroke={myColor.primary.brown} strokeWidth="2" />
        </Svg>
      </Link>
    </Button>
  );
};

CreateButton.defaultProps = defaultProps;

export default CreateButton;
