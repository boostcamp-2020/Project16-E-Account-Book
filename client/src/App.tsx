import React from 'react';
import LoginPage from '@views/LoginPage';
import MainPage from '@views/MainPage';
import NotificationPage from '@views/NotificationPage';
import MyPage from '@views/MyPage';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    *:focus { outline:none; }
  }
`;

function App(): JSX.Element {
  // TODO : 로그인 라우터 구현하기
  // const loginRouter = (
  //   <>
  //     <Route path="/login" component={LoginPage} />
  //     <Redirect from="*" to="/login" />
  //   </>
  // );

  const mainRouter = (
    <>
      <Route exact path="/" component={MainPage} />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/notification" component={NotificationPage} />
        <Route path="/mypage" component={MyPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );

  return (
    <BrowserRouter>
      {mainRouter}
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
