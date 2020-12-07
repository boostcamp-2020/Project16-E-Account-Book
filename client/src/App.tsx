import React from 'react';
import LoginPage from '@views/LoginPage';
import MainPage from '@views/MainPage';
import NotificationPage from '@views/NotificationPage';
import MyPage from '@views/MyPage';
import CreateAccountbookPage from '@views/CreateAccountbookPage';
import TransactionPostPage from '@views/TransactionPostPage';
import AccountbookPage from '@views/AccountbookPage';
import GlobalStyle from '@shared/global';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/rootReducer';

const App: React.FC = () => {
  const login = useSelector((state: RootState) => state.user.isLogin);

  const loginRouter = (
    <>
      <Route path="/login" component={LoginPage} />
      <Redirect from="*" to="/login" />
    </>
  );

  const mainRouter = (
    <>
      <Route exact path="/" component={MainPage} />
      <Switch>
        <Route path="/notification" component={NotificationPage} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/social-accountbook/new" component={CreateAccountbookPage} />
        <Route path="/transaction/new" component={TransactionPostPage} />
        <Route path="/accountbook" component={AccountbookPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );

  return (
    <CookiesProvider>
      <BrowserRouter>
        {login ? mainRouter : loginRouter}
        <GlobalStyle />
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
