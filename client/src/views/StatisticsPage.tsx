import React, { useEffect, useState } from 'react';
import ColumFlexContainer from '@atoms/div/ColumnFlexContainer';
import FourMonthStatistics from '@organisms/FourMonthStatistics';
import { useSelector } from 'react-redux';
import { getAxiosData } from '@utils/axios';
import * as API from '@utils/api';
import { RootState } from '@reducers/rootReducer';

const StatisticsPage: React.FC = () => {
  const accountbookId = useSelector((state: RootState) => state.accountbook.socialId);
  const [fourMonthData, setFourMonthData] = useState([]);

  console.log(accountbookId);
  const initFourMonthData = async () => {
    const master = await getAxiosData(`${API.GET_SOCIAL_FOUR_MONTH_STATISTICS}+${accountbookId}`);
    setFourMonthData(master.data.reverse());
  };

  useEffect(() => {
    initFourMonthData();
  }, []);

  return (
    <ColumFlexContainer width="100%" alignItems="center">
      <FourMonthStatistics data={fourMonthData} />
    </ColumFlexContainer>
  );
};

export default StatisticsPage;
