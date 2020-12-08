import React, { useState, useEffect } from 'react';
import ToggleButton from '@atoms/div/ToggleButton';
import MonthNav from '@molecules/MonthNav';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';

const StatisticsPage: React.FC = () => {
  const year = useSelector((state: RootState) => state.date.year);
  const month = useSelector((state: RootState) => state.date.month);
  const accountbookType = useSelector((state: RootState) => state.accountbook.type);
  const accountbookId = useSelector((state: RootState) => state.accountbook.socialId);
  const dateData = `${year}-${month}`;

  const [isIncome, setIsIncome] = useState(true);
  const [isExpenditure, setIsExpenditure] = useState(false);

  useEffect(() => {
    console.log(isIncome);
    console.log(isExpenditure);
    console.log(accountbookType);
    console.log(accountbookId);
  }, [dateData]);

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
    </>
  );
};

export default StatisticsPage;
