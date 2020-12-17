import React from 'react';
import styled from 'styled-components';
import SquircleCard from '@atoms/div/SquircleCard';
import UserImages from '@molecules/UserImages';
import CardInfo from '@molecules/CardInfo';
import CardNumberText from '@molecules/CardNumberText';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSocial } from '@actions/accountbook/type';
import { initMonth } from '@actions/date/type';
import { SocialBook } from '@interfaces/accountbook';
import NavButton from '@atoms/button/NavButton';
import myColor from '@theme/color';

const Container = styled.button`
  background-color: transparent;
  border: 0px;
  width: 100%;
  cursor: pointer;
  padding: 0px;
`;

const LeftBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const CenterBox = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
`;

const RightBox = styled.div`
  display: flex;
  flex: 1.4;
  align-items: center;
`;

const Setting = styled.button`
  float: right;
  margin-right: 8px;
  margin-top: -40px;
  border: 0px;
  background: transparent;
  width: 20px;
`;

const defaultProps = {
  isMaster: false,
};

const socialAccountBook: React.FC<SocialBook> = ({
  id,
  name,
  description,
  color,
  incomeSum,
  expenditureSum,
  images,
  isMaster,
}: SocialBook) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const toSocialAccountBook = () => {
    localStorage.setItem('account_book_type', `SOCIAL`);
    localStorage.setItem('account_book_id', `${id}`);
    dispatch(setSocial(id));
    dispatch(initMonth());
    history.push('/accountbook');
  };

  const setSocialId = () => {
    dispatch(setSocial(id));
  };

  const moveUrl = '/social/edit';

  return (
    <>
      <Container onClick={toSocialAccountBook}>
        <SquircleCard backgroundColor={color} height="90px">
          <LeftBox>
            <UserImages links={images} />
          </LeftBox>
          <CenterBox>
            <CardInfo title={name} description={description} />
          </CenterBox>
          <RightBox>
            <CardNumberText
              fontSize="0.6rem"
              inMoney={Number(incomeSum)}
              exMoney={Number(expenditureSum)}
            />
            {isMaster && (
              <Setting onClick={(e) => e.stopPropagation()}>
                <NavButton
                  onClick={setSocialId}
                  moveUrl={moveUrl}
                  name="setting"
                  width="16px"
                  height="16px"
                  iconColor={myColor.primary.black}
                />
              </Setting>
            )}
          </RightBox>
        </SquircleCard>
      </Container>
    </>
  );
};

socialAccountBook.defaultProps = defaultProps;

export default socialAccountBook;
