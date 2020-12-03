import React from 'react';
import LoginPage from '@views/LoginPage';
import MainPage from '@views/MainPage';
import NotificationPage from '@views/NotificationPage';
import MyPage from '@views/MyPage';
import CreateAccountbookPage from '@views/CreateAccountbookPage';
import Accountbook from '@views/Accountbook';

import GlobalStyle from '@shared/global';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

const App: React.FC = () => {
  const mainRouter = (
    <>
      <Route exact path="/" component={MainPage} />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/notification" component={NotificationPage} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/createAccountbook" component={CreateAccountbookPage} />
        <Route path="/accountbook" component={Accountbook} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );

  return (
    <CookiesProvider>
      <BrowserRouter>
        {mainRouter}
        <GlobalStyle />
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
