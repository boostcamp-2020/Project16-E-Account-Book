import React from 'react';
import ColoredBackground from '@organisms/ColoredBackground';
import myColor from '@theme/color';
import CenterContent from '@molecules/CenterContent';
import CreateAccountbookForm from '@organisms/CreateAccountbookFormBox';
import TopNavBar from '@organisms/TopNavBar';

const CreateAccountbookPage: React.FC = () => {
  return (
    <>
      <ColoredBackground backgroundColor={myColor.primary.lightGray} />
      <CenterContent>
        <TopNavBar />
        <CreateAccountbookForm backgroundColor={myColor.primary.main} />
      </CenterContent>
    </>
  );
};

/*
<ColoredBackground backgroundColor={myColor.primary.lightGray} />
      <CenterContent>
        <ColumnFlexContainer>
          <TopNavBar />
          <CreateAccountbookForm />
          <AccountbookSetting />
        </ColumnFlexContainer>
      </CenterContent>
*/

export default CreateAccountbookPage;
