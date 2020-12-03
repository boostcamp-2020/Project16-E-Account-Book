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

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Accountbook: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  const tabsStyle = {
    backgroundColor: myColor.primary.main,
  };

  const MarginBox = styled.div`
    width: 100%;
    height: 2rem; {/* <TopNavBar /> */
  `;

  const tabStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <CenterContent>
      <TopNavBar />
      <MarginBox />
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          style={tabsStyle}
          centered
        >
          <Link style={tabStyle} to="/accountbook/list" onClick={() => setValue(0)}>
            <Tab label="내역" />
          </Link>
          <Link style={tabStyle} to="/accountbook/calendar" onClick={() => setValue(1)}>
            <Tab label="달력" />
          </Link>
          <Link style={tabStyle} to="/accountbook/statistics" onClick={() => setValue(2)}>
            <Tab label="통계" />
          </Link>
        </Tabs>
      </Paper>
      <Switch>
        <Route path="/accountbook/list" component={TransactionPage} />
        <Route path="/accountbook/calendar" component={CalendarPage} />
        <Route path="/accountbook/statistics" component={StatisticsPage} />
        <Redirect from="*" to="/accountbook/list" />
      </Switch>
    </CenterContent>
  );
};

export default Accountbook;
