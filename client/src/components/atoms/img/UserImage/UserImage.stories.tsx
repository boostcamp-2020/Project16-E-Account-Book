import React from 'react';
import UserImage from './UserImage';

interface Props {
  link: string;
}

export default {
  title: 'Atoms/Img/UserImage',
  component: UserImage,
  argTypes: {
    link: { control: 'text' },
  },
};

export const userImage = ({ link }: Props): JSX.Element => {
  return <UserImage link={link} />;
};

userImage.story = {
  name: 'UserImage',
};

userImage.args = {
  link:
    'https://camo.githubusercontent.com/80afeacc15fc9527cacd6a8257613bcc97967d63947bbb8e2f6efe0a2ed8d59d/68747470733a2f2f692e696d6775722e636f6d2f536c7568554c712e6a7067',
};
