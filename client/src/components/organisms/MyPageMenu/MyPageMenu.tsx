import React from 'react';
import styled from 'styled-components';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import HexagonButton from '@atoms/button/HexagonButton';
import AccountBookSVG from '@svg/check-piggy-bank.svg';
import CreditCardSVG from '@svg/credit-card.svg';
import UserInfoSVG from '@svg/fix.svg';
import myColor from '@theme/color';
import { showModal } from '@actions/modal/type';
import { useDispatch } from 'react-redux';

const TopMenuBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
`;

const BottomMenuBox = styled.div`
  margin-top: -32px;
`;

const MyPageMenu: React.FC = () => {
  const dispatch = useDispatch();

  const openModal = (view: string) => {
    dispatch(showModal(view));
  };

  const accountBookSVG = <AccountBookSVG width={40} height={40} fill={myColor.primary.brown} />;
  const accountBookMenu = (
    <HexagonButton
      name="가계부 승인/거절"
      color={myColor.primary.main}
      svgIcon={accountBookSVG}
      onClick={() => openModal('AccountBookAccept')}
    />
  );

  const creditCardSVG = <CreditCardSVG width={40} height={40} fill={myColor.primary.brown} />;
  const creditCardMenu = (
    <HexagonButton
      name="결제 수단 관리"
      color={myColor.primary.light}
      svgIcon={creditCardSVG}
      onClick={() => openModal('CreditCardEdit')}
    />
  );

  const userInfoSVG = <UserInfoSVG width={40} height={40} fill={myColor.primary.brown} />;
  const userInfoMenu = (
    <HexagonButton
      name="개인 정보 변경"
      color={myColor.primary.dark}
      svgIcon={userInfoSVG}
      onClick={() => openModal('UserInfoSetting')}
    />
  );
  return (
    <ColumnFlexContainer margin="0 0 0 8px">
      <TopMenuBox>
        {accountBookMenu}
        {creditCardMenu}
      </TopMenuBox>
      <BottomMenuBox>{userInfoMenu}</BottomMenuBox>
    </ColumnFlexContainer>
  );
};

export default MyPageMenu;
