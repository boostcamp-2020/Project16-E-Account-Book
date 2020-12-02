import React from 'react';
import UserInfoSettingModal from './UserInfoSettingModal';

export default {
  title: 'Organisms/UserInfoSettingModal',
  component: UserInfoSettingModal,
};

export const userInfoSettingModal = (): JSX.Element => {
  return <UserInfoSettingModal />;
};

userInfoSettingModal.story = {
  name: 'UserInfoSettingModal',
};
