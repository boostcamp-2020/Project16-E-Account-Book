import React from 'react';
import ColoredBackground from '@organisms/ColoredBackground';
import myColor from '@theme/color';
import CenterContent from '@molecules/CenterContent';
import CreateAccountbookFormBox from '@organisms/CreateAccountbookFormBox';
import TopNavBar from '@organisms/TopNavBar';
import CreateAccountbookSetting from '@organisms/CreateAccountbookSetting';

const CreateAccountbookPage: React.FC = () => {
  return (
    <>
      <ColoredBackground backgroundColor={myColor.primary.lightGray} />
      <CenterContent>
        <TopNavBar backgroundColor={myColor.primary.purple} />
        <CreateAccountbookFormBox backgroundColor={myColor.primary.purple} />
        <CreateAccountbookSetting
          labelColor="blue"
          links={[
            'https://avatars2.githubusercontent.com/u/46099115?s=460&u=1e04610d430875d8189d2b212b8c2d9fc268b9db&v=4',
            'https://avatars3.githubusercontent.com/u/55074799?s=460&u=2f70319c2f55ba5e26db060ba21d66a9cab35732&v=4',
            'https://avatars2.githubusercontent.com/u/50297117?s=460&u=2ddc78ef0045b75f6fb405f1763304a7481d46e4&v=4',
          ]}
        />
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
