import React from 'react';
import styled from 'styled-components';

interface Props extends ImageProps {
  link: string;
}
interface ImageProps {
  size?: string;
}

const defaultProps = {
  size: '48px',
};

const Image = styled.img<ImageProps>`
  border-radius: 50px;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  object-fit: cover;
`;

const UserImage: React.FC<Props> = ({ link, size }: Props) => {
  return <Image src={link} size={size} />;
};

UserImage.defaultProps = defaultProps;

export default UserImage;
