import React, { useState } from 'react';
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
import { useHistory } from 'react-router-dom';
import getColorList from '@theme/colorList';
import * as Axios from '@utils/axios';
import * as API from '@utils/api';

const backgroundColor = colorUtils.getRandomColorInList(getColorList());

const CreateAccountbookPage: React.FC = () => {
  const modalView = useSelector((state: RootState) => state.modal.view);
  const [accountbookMainColor, setAccountbookMainColor] = useState(backgroundColor);
  const history = useHistory();

  const createButtonClick = async (name: any, description: any) => {
    const data = {
      name,
      description,
      color: accountbookMainColor,
    };

    await Axios.postAxios(API.POST_CREATE_SOCIAL, data);

    history.push('/');
  };

  const SettingContainer = styled.div`
    width = 100%;
    margin-bottom: 1rem;
  `;

  const getAccountbookMainColor = (color) => {
    setAccountbookMainColor(color);
  };
  return (
    <>
      <ColoredBackground backgroundColor={myColor.primary.lightGray} />
      <CenterContent>
        <TopNavBar backgroundColor={accountbookMainColor} />
        <CreateAccountbookFormBox
          buttonEvent={createButtonClick}
          backgroundColor={accountbookMainColor}
        />
        <SettingContainer>
          <CreateAccountbookSetting labelColor={accountbookMainColor} />
        </SettingContainer>
      </CenterContent>
      {modalView === 'CreateAccountbookColor' && (
        <CreateAccountbookColorModal
          buttonEvent={getAccountbookMainColor}
          currentColor={accountbookMainColor}
        />
      )}
    </>
  );
};

export default CreateAccountbookPage;
