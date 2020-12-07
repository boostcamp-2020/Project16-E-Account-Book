import React, { useEffect } from 'react';
import LoginPage from '@views/LoginPage';
import MainPage from '@views/MainPage';
import NotificationPage from '@views/NotificationPage';
import MyPage from '@views/MyPage';
import CreateAccountbookPage from '@views/CreateAccountbookPage';
import TransactionPostPage from '@views/TransactionPostPage';
import AccountbookPage from '@views/AccountbookPage';
import NotFoundPage from '@views/NotFoundPage';
import GlobalStyle from '@shared/global';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import { setCategory } from '@actions/category/type';
import { setPayment } from '@actions/payment/type';
import { getAxios } from '@utils/axios';
import * as API from '@utils/api';

const getInitData = async (api: string) => {
  const { data } = await getAxios(api);
  return data;
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.user.isLogin);

  const initCategory = async () => {
    const income = await getInitData(API.GET_INCOME_CATEGORY);
    const expenditure = await getInitData(API.GET_EXPENDITURE_CATEGORY);
    dispatch(setCategory(income.data, expenditure.data));
  };

  const initPayment = async () => {
    const payment = await getInitData(API.GET_PAYMENT);
    dispatch(setPayment(payment.data));
  };

  useEffect(() => {
    if (login) {
      initCategory();
      initPayment();
    }
  }, [login]);

  const loginRouter = (
    <>
      <Route path="/login" component={LoginPage} />
      <Redirect from="*" to="/login" />
    </>
  );

  const mainRouter = (
    <>
      <Switch>
        <Route path="/notification" component={NotificationPage} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/accountbook/social/new" component={CreateAccountbookPage} />
        <Route path="/accountbook/transaction/new" component={TransactionPostPage} />
        <Route path="/accountbook" component={AccountbookPage} />
        <Route exact path="/" component={MainPage} />
        <Route path="/*" component={NotFoundPage} />
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
