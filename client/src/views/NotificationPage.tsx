import React from 'react';
import CenterContent from '@molecules/CenterContent';
import PreparationBox from '@molecules/PreparationBox';
import TopNavBar from '@organisms/TopNavBar';
import myColor from '@theme/color';

const NotificationPage: React.FC = () => {
  return (
    <CenterContent>
      <TopNavBar />
      <PreparationBox color={myColor.primary.black}>현재 준비중인 서비스 입니다!</PreparationBox>
    </CenterContent>
  );
};

export default NotificationPage;
