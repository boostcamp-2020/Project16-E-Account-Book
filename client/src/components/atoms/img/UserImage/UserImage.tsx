import React from 'react';
import styled from 'styled-components';

interface Props {
  link: string;
}

const Image = styled.img`
  border-radius: 50px;
  width: 48px;
  height: 48px;
  object-fit: cover;
`;

const UserImage: React.FC<Props> = ({ link }: Props) => {
  return <Image src={link} />;
};

export default UserImage;
