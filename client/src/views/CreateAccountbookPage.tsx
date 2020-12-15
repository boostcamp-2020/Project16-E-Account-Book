import React from 'react';
import ColoredBackground from '@organisms/ColoredBackground';
import myColor from '@theme/color';
import CenterContent from '@molecules/CenterContent';
import CreateAccountbookFormBox from '@organisms/CreateAccountbookFormBox';
import TopNavBar from '@organisms/TopNavBar';
import CreateAccountbookSetting from '@organisms/CreateAccountbookSetting';
import colorUtils from '@utils/color';
import styled from 'styled-components';
import CreateAccountbookColorModal from '@organisms/CreateAccountbookColorModal';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
/* import * as Axios from '@utils/axios';
import * as API from '@utils/api'; */

const backgroundColor = colorUtils.getRandomColor();
const CreateAccountbookPage: React.FC = () => {
  const modalView = useSelector((state: RootState) => state.modal.view);

  const createButtonClick = async (name: any, description: any) => {
    const data = {
      name,
      description,
    };
    // const result = await Axios.postAxios(API.POST_CREATE_SOCIAL, data);
    console.log(data);
  };

  const SettingContainer = styled.div`
    width = 100%;
    margin-bottom: 1rem;
  `;

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
          <CreateAccountbookSetting labelColor={backgroundColor} />
        </SettingContainer>
      </CenterContent>
      {modalView === 'CreateAccountbookColor' && (
        <CreateAccountbookColorModal currentColor={backgroundColor} />
      )}
    </>
  );
};

export default CreateAccountbookPage;
