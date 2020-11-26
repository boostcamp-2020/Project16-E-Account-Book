import React from 'react';
import styled from 'styled-components';
import BeeLogo from '@img/bee-logo.png';

const Image = styled.img`
  height: 30%;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

const BeeLogoImage: React.FC = () => {
  return <Image src={BeeLogo} />;
};

export default BeeLogoImage;
