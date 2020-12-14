import React, { useEffect } from 'react';
import LoginPage from '@views/LoginPage';
import MainPage from '@views/MainPage';
import NotificationPage from '@views/NotificationPage';
import MyPage from '@views/MyPage';
import CreateAccountbookPage from '@views/CreateAccountbookPage';
import TransactionPostPage from '@views/TransactionPostPage';
import AccountbookPage from '@views/AccountbookPage';
import NotFoundPage from '@views/NotFoundPage';
import AccountbookEditPage from '@views/AccountbookEditPage;
import GlobalStyle from '@shared/global';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@reducers/rootReducer';
import { setCategory } from '@actions/category/type';
import { setPayment } from '@actions/payment/type';
import { setPrivate, setSocial } from '@actions/accountbook/type';
import { getAxiosData } from '@utils/axios';
import { logout, setUser } from '@actions/user/type';
import * as API from '@utils/api';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.user.isLogin);

  const checkValidToken = async () => {
    try {
      const user = await getAxiosData(API.GET_USER_INFO);
      dispatch(setUser(user.data.name, user.data.picture));
    } catch {
      localStorage.removeItem('jwt');
      dispatch(logout());
    }
  };

  const initCategory = async () => {
    const income = await getAxiosData(API.GET_INCOME_CATEGORY);
    const expenditure = await getAxiosData(API.GET_EXPENDITURE_CATEGORY);
    dispatch(setCategory(income.data, expenditure.data));
  };

  const initPayment = async () => {
    const payment = await getAxiosData(API.GET_PAYMENT);
    dispatch(setPayment(payment.data));
  };

  const initAccountBook = () => {
    if (localStorage.getItem('account_book_type') === 'SOCIAL') {
      dispatch(setSocial(Number(localStorage.getItem('account_book_id'))));
    } else {
      dispatch(setPrivate());
    }
  };

  useEffect(() => {
    if (login) {
      checkValidToken();
      initCategory();
      initPayment();
      initAccountBook();
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
        <Route path="/social/edit" component={AccountbookEditPage} />
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
