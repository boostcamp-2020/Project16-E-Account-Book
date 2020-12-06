import React from 'react';
import CenterContent from '@molecules/CenterContent';
import TopNavBar from '@organisms/TopNavBar';

const NotificationPage: React.FC = () => {
  return (
    <>
      <TopNavBar />
      <CenterContent>
        <p>notification page</p>
      </CenterContent>
    </>
  );
};

export default NotificationPage;
