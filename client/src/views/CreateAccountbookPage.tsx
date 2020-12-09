import React from 'react';
import ColoredBackground from '@organisms/ColoredBackground';
import myColor from '@theme/color';
import CenterContent from '@molecules/CenterContent';
import CreateAccountbookFormBox from '@organisms/CreateAccountbookFormBox';
import TopNavBar from '@organisms/TopNavBar';
import CreateAccountbookSetting from '@organisms/CreateAccountbookSetting';
import colorUtils from '@utils/color';
/* import * as Axios from '@utils/axios';
import * as API from '@utils/api'; */

const CreateAccountbookPage: React.FC = () => {
  const createButtonClick = async (data: any) => {
    /* const data = {
      name,
      description,
      usersList,
      color,
    };
    const result = await Axios.postAxios(API.POST_CREATE_SOCIAL, data); */
    console.log(data);
  };
  const backgroundColor = colorUtils.getRandomColor();
  return (
    <>
      <ColoredBackground backgroundColor={myColor.primary.lightGray} />
      <CenterContent>
        <TopNavBar backgroundColor={backgroundColor} />
        <CreateAccountbookFormBox
          buttonEvent={createButtonClick}
          backgroundColor={backgroundColor}
        />
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

export default CreateAccountbookPage;
