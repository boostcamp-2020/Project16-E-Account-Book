import React from 'react';
import styled from 'styled-components';
import Logo from '@img/logo.png';

const Image = styled.img`
  width: 40%;
  margin-left: 4vw;
`;

const LogoImage: React.FC = () => {
  return <Image src={Logo} />;
};

export default LogoImage;
