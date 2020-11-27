import React from 'react';
import styled from 'styled-components';
import UserImage from '@atoms/img/UserImage';
import NoOne from '@img/no-one.png';

interface Props {
  links: string[];
}

const UserImages = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 80px;
`;

const Images = styled.div`
  width: 20px;
`;

const userImages: React.FC<Props> = ({ links }: Props) => {
  let userLink: string[] = links;
  if (links.length >= 3) {
    userLink = links.slice(0, 3);
    userLink.unshift(NoOne);
  }
  const allImage = userLink.map((user) => (
    <Images>
      <UserImage link={user} />
    </Images>
  ));
  return <UserImages>{allImage}</UserImages>;
};

export default userImages;
