import React from 'react';
import styled from 'styled-components';
import UpSentence from '@atoms/p/LeftNormalText';
import DownSentence from '@atoms/p/LeftSmallText';

interface Props {
  title: string;
  description: string;
}

const SocialInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const socialInfo: React.FC<Props> = ({ title, description }: Props) => {
  return (
    <SocialInfo>
      <UpSentence>{title}</UpSentence>
      <DownSentence>{description}</DownSentence>
    </SocialInfo>
  );
};

export default socialInfo;
