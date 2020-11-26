import React from 'react';
import styled from 'styled-components';
import Logo from '@img/logo.png';

const Image = styled.img`
  width: 60%;
`;

const LogoImage: React.FC = () => {
  return <Image src={Logo} />;
};

export default LogoImage;
