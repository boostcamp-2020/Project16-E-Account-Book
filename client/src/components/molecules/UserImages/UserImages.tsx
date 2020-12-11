import React from 'react';
import styled from 'styled-components';
import UserImage from '@atoms/img/UserImage';
import NoOne from '@img/no-one.png';
import getRandomKey from '@utils/random.ts';

interface Props {
  links: string[];
}

const UserImages = styled.div`
  display: flex;
  width: 60px;
`;

const Images = styled.div`
  width: 15px;
`;

const userImages: React.FC<Props> = ({ links }: Props) => {
  let userLink: string[] = links;
  if (links.length >= 3) {
    userLink = links.slice(0, 3);
    userLink.push(NoOne);
  }
  const allImage = userLink.map((user, index) => {
    const zIndex = 4 - index;
    return (
      <Images key={getRandomKey()}>
        <UserImage size="40px" link={user} zIndex={zIndex} />
      </Images>
    );
  });
  return <UserImages>{allImage}</UserImages>;
};

export default userImages;
