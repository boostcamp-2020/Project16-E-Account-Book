import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import myColor from '@theme/color';
import TopNavBar from '@organisms/TopNavBar';
import CenterContent from '@molecules/CenterContent';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import TransactionPage from '@views/TransactionPage';
import CalendarPage from '@views/CalendarPage';
import StatisticsPage from '@views/StatisticsPage';

// eslint-disable-next-line no-shadow
enum Menu {
  Transaction,
  Calendar,
  Statistic,
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Accountbook: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState(1);

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  const tabsStyle = {
    backgroundColor: myColor.primary.main,
  };

  const TopNavMarginBox = styled.div`
    width: 100%;
    height: 2rem; {/* <TopNavBar /> */
  `;

  const PaperMarginBox = styled.div`
    width: 100%;
    height: 2.9rem; {/* <TopNavBar /> */
  `;

  const PaperContainer = styled.div`
    width: 100%;
    position: fixed;
    z-index: 7;
    max-width: 1200px;
  `;
  const tabStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  const renderTransaction = () => {
    setValue(Menu.Transaction);
    return <TransactionPage />;
  };

  const renderCalendar = () => {
    setValue(Menu.Calendar);
    return <CalendarPage />;
  };

  const renderStatistics = () => {
    setValue(Menu.Statistic);
    return <StatisticsPage />;
  };

  return (
    <CenterContent>
      <TopNavBar />
      <TopNavMarginBox />
      <PaperContainer>
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            style={tabsStyle}
            centered
          >
            <Link style={tabStyle} to="/accountbook/list">
              <Tab label="내역" />
            </Link>
            <Link style={tabStyle} to="/accountbook/calendar">
              <Tab label="달력" />
            </Link>
            <Link style={tabStyle} to="/accountbook/statistics">
              <Tab label="통계" />
            </Link>
          </Tabs>
        </Paper>
      </PaperContainer>
      <PaperMarginBox />
      <Switch>
        <Route path="/accountbook/list" render={renderTransaction} />
        <Route path="/accountbook/calendar" render={renderCalendar} />
        <Route path="/accountbook/statistics" render={renderStatistics} />
        <Redirect from="*" to="/accountbook/calendar" />
      </Switch>
    </CenterContent>
  );
};

export default Accountbook;
