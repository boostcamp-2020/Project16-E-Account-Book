import React, { useState, useEffect } from 'react';
import ToggleButton from '@atoms/div/ToggleButton';
import MonthNav from '@molecules/MonthNav';
import ColumFlexContainer from '@atoms/div/ColumnFlexContainer';
import FourMonthStatistics from '@organisms/FourMonthStatistics';
import FiveWeekStatistics from '@organisms/FiveWeekStatistics';
import StickStatistics from '@organisms/StickChart';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import { getAxiosData } from '@utils/axios';
import styled from 'styled-components';
import * as API from '@utils/api';

const MonthNavMarginBox = styled.div`
  width: 100%;
  height: 2rem; {/* <TopNavBar /> */
`;

const Container = styled.div`
  border: 2px solid white;
  border-radius: 5px;
`;

const StatisticsPage: React.FC = () => {
  const year = useSelector((state: RootState) => state.date.year);
  const month = useSelector((state: RootState) => state.date.month);
  const accountbookType = useSelector((state: RootState) => state.accountbook.type);
  const accountbookId = useSelector((state: RootState) => state.accountbook.socialId);
  const dateData = `${year}-${month}`;

  const [isIncome, setIsIncome] = useState(true);
  const [isExpenditure, setIsExpenditure] = useState(false);
  const [fourMonthData, setFourMonthData] = useState([]);
  const [fiveWeekData, setFiveWeekData] = useState([]);
  const [stickData, setStickData] = useState({});

  const initFourMonthData = async () => {
    const master =
      accountbookType === 'SOCIAL'
        ? await getAxiosData(API.GET_SOCIAL_FOUR_MONTH_STATISTICS(accountbookId))
        : await getAxiosData(API.GET_PRIVATE_FOUR_MONTH_STATISTICS);
    setFourMonthData(master.data);
  };

  const initFiveWeekData = async () => {
    const master =
      accountbookType === 'SOCIAL'
        ? await getAxiosData(API.GET_SOCIAL_FIVE_WEEK_STATISTICS(accountbookId))
        : await getAxiosData(API.GET_PRIVATE_FIVE_WEEK_STATISTICS);
    setFiveWeekData(master.data);
  };

  const initStickData = async () => {
    let result;
    switch (accountbookType) {
      case 'PRIVATE':
        result = await getAxiosData(API.GET_PRIVATE_STATISTIC_CATEGORY(year, month));
        setStickData(result.data);
        break;
      case 'SOCIAL':
        result = await getAxiosData(API.GET_SOCIAL_STATISTIC_CATEGORY(accountbookId, year, month));
        setStickData(result.data);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log(isIncome);
    console.log(isExpenditure);
    console.log(accountbookType);
    console.log(accountbookId);
  }, [dateData]);

  useEffect(() => {
    initFourMonthData();
    initFiveWeekData();
    initStickData();
  }, [dateData]);

  return (
    <Container>
      <MonthNav />
      <MonthNavMarginBox />
      <ToggleButton
        leftButtonName="수입"
        rightButtonName="지출"
        leftCallback={setIsIncome}
        rightCallback={setIsExpenditure}
      />
      <ColumFlexContainer width="100%" alignItems="center">
        <StickStatistics data={stickData} isIncome={isIncome} />
        <FiveWeekStatistics data={fiveWeekData} isIncome={isIncome} />
        <FourMonthStatistics data={fourMonthData} />
      </ColumFlexContainer>
    </Container>
  );
};

export default StatisticsPage;
