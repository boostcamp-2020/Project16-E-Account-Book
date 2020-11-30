import React from 'react';
import LoginPage from '@views/LoginPage';
import MainPage from '@views/MainPage';
import NotificationPage from '@views/NotificationPage';
import MyPage from '@views/MyPage';
import GlobalStyle from '@shared/global';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  const mainRouter = (
    <>
      <Route exact path="/" component={MainPage} />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/notification" component={NotificationPage} />
        <Route path="/mypage" component={MyPage} />
      </Switch>
    </>
  );

  return (
    <BrowserRouter>
      {mainRouter}
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
