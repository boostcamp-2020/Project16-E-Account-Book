import React from 'react';
import ColoredBackground from '@organisms/ColoredBackground';
import myColor from '@theme/color';
import CenterContent from '@molecules/CenterContent';
import CreateAccountbookFormBox from '@organisms/CreateAccountbookFormBox';
import TopNavBar from '@organisms/TopNavBar';
import InviteAccountbookCard from '@molecules/InviteAccountbookCard';
import colorUtils from '@utils/color';
import styled from 'styled-components';
import InvitationModal from '@organisms/InvitationModal';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';

interface InviteProps {
  links: string[];
  backgroundColor: string;
  name: string;
}

const AccountbookEditPage: React.FC = () => {
  const modalView = useSelector((state: RootState) => state.modal.view);
  const createButtonClick = async (data: any) => {
    console.log(data);
  };

  const SettingContainer = styled.div`
    width = 100%;
    margin-bottom: 1rem;
  `;

  const backgroundColor = colorUtils.getRandomColor();

  // TODO ROUTER 에서 links, backgroudColor, name, socialID 가져오기

  const links = [
    'https://avatars2.githubusercontent.com/u/46099115?s=460&u=1e04610d430875d8189d2b212b8c2d9fc268b9db&v=4',
    'https://avatars3.githubusercontent.com/u/55074799?s=460&u=2f70319c2f55ba5e26db060ba21d66a9cab35732&v=4',
    'https://avatars2.githubusercontent.com/u/50297117?s=460&u=2ddc78ef0045b75f6fb405f1763304a7481d46e4&v=4',
  ];

  const InviteArgs: InviteProps = {
    links,
    backgroundColor: 'yellow',
    name: '부캠동아리',
  };

  const id = 2;

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
          <InviteAccountbookCard {...InviteArgs} />
        </SettingContainer>
      </CenterContent>
      {modalView === 'InvitationModal' && <InvitationModal socialId={id} />}
    </>
  );
};

export default AccountbookEditPage;
