import React from 'react';
import ColoredBackground from '@organisms/ColoredBackground';
import myColor from '@theme/color';
// import TopNavBar from '../components/organisms/TopNavBar';

const CreateAccountbookPage: React.FC = () => {
  return (
    <>
      <ColoredBackground backgroundColor={myColor.primary.lightGray} />
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
