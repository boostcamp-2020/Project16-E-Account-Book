import React from 'react';
import ColoredBackground from '@organisms/ColoredBackground';
import myColor from '@theme/color';
import CenterContent from '@molecules/CenterContent';
import CreateAccountbookFormBox from '@organisms/CreateAccountbookFormBox';
import TopNavBar from '@organisms/TopNavBar';
import CreateAccountbookSetting from '@organisms/CreateAccountbookSetting';
import colorUtils from '@utils/color';
import styled from 'styled-components';
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

  const SettingContainer = styled.div`
    width = 100%;
    margin-bottom: 1rem;
  `;

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
        <SettingContainer>
          <CreateAccountbookSetting labelColor="blue" />
        </SettingContainer>
      </CenterContent>
    </>
  );
};

export default CreateAccountbookPage;
