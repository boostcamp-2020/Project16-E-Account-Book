import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import myColor from '@theme/color';
import TopNavBar from '@organisms/TopNavBar';
import CenterContent from '@molecules/CenterContent';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import List from '@views/List';
import Calendar from '@views/Calendar';
import Statistics from '@views/Statistics';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Accountbook: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
    color: myColor.primary.black,
  };

  return (
    <CenterContent>
      <TopNavBar />
      <MarginBox />
      <Router>
        <Paper className={classes.root}>
          <Tabs value={value} onChange={handleChange} style={tabsStyle} centered>
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
          <Route path="/accountbook/list" component={List} />
          <Route path="/accountbook/calendar" component={Calendar} />
          <Route path="/accountbook/statistics" component={Statistics} />
        </Switch>
      </Router>
    </CenterContent>
  );
};

export default Accountbook;
