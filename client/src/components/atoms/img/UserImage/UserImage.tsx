import React from 'react';
import styled from 'styled-components';

interface Props extends ImageProps {
  link: string;
}
interface ImageProps {
  zIndex?: string | number;
  size?: string;
}

const defaultProps = {
  size: '48px',
  zIndex: 'auto',
};

const Image = styled.img<ImageProps>`
  border-radius: 50px;
  position: relative;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  z-index: ${(props) => props.zIndex};
  object-fit: cover;
`;

const UserImage: React.FC<Props> = ({ link, zIndex, size }: Props) => {
  return <Image src={link} zIndex={zIndex} size={size} />;
};

UserImage.defaultProps = defaultProps;

export default UserImage;
