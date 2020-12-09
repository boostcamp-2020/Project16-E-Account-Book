import React, { useState, useEffect } from 'react';
import ToggleButton from '@atoms/div/ToggleButton';
import MonthNav from '@molecules/MonthNav';
import ColumFlexContainer from '@atoms/div/ColumnFlexContainer';
import FourMonthStatistics from '@organisms/FourMonthStatistics';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import { getAxiosData } from '@utils/axios';
import * as API from '@utils/api';

const StatisticsPage: React.FC = () => {
  const year = useSelector((state: RootState) => state.date.year);
  const month = useSelector((state: RootState) => state.date.month);
  const accountbookType = useSelector((state: RootState) => state.accountbook.type);
  const accountbookId = useSelector((state: RootState) => state.accountbook.socialId);
  const dateData = `${year}-${month}`;

  const [isIncome, setIsIncome] = useState(true);
  const [isExpenditure, setIsExpenditure] = useState(false);
  const [fourMonthData, setFourMonthData] = useState([]);

  const initFourMonthData = async () => {
    const master = await getAxiosData(`${API.GET_SOCIAL_FOUR_MONTH_STATISTICS}+${accountbookId}`);
    setFourMonthData(master.data.reverse());
  };

  useEffect(() => {
    console.log(isIncome);
    console.log(isExpenditure);
    console.log(accountbookType);
    console.log(accountbookId);
  }, [dateData]);

  useEffect(() => {
    initFourMonthData();
  }, []);

  const onClick = () => {
    return true;
  };

  return (
    <>
      <MonthNav />
      <ToggleButton
        leftButtonName="수입"
        rightButtonName="지출"
        leftCallback={setIsIncome}
        rightCallback={setIsExpenditure}
        onClick={onClick}
      />
      <ColumFlexContainer width="100%" alignItems="center">
        <FourMonthStatistics data={fourMonthData} />
      </ColumFlexContainer>
    </>
  );
};

export default StatisticsPage;
