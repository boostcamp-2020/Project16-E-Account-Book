import React, { useEffect } from 'react';
import ColumFlexContainer from '@atoms/div/ColumnFlexContainer';
import LogoWithSlogan from '@organisms/LogoWithSlogan';
import CenterContent from '@molecules/CenterContent';
import BeeBackground from '@organisms/BeeBackground';
import EasyLogin from '@organisms/EasyLogin';
import TestLogin from '@organisms/TestLogin';
import { login } from '@actions/user/type';
import { useDispatch } from 'react-redux';
import qs from 'qs';
import axios from 'axios';
import * as API from '@utils/api';
import { useHistory } from 'react-router-dom';

interface props {
  location: any;
}

const LoginPage: React.FC<props> = ({ location }: props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const slogan = '지갑 속 꿀 같은 돈을 지키는 첫번째 방법';

  const getJWT = async (code, site, state) => {
    const { data } = await axios.post(API.GET_JWT, {
      code,
      site,
      state,
    });
    return data;
  };

  useEffect(() => {
    const { code, site, state }: any = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    if (code) {
      (async () => {
        const jwtToken = await getJWT(code, site, state);
        localStorage.setItem('jwt', jwtToken);
        dispatch(login());
        history.push('/');
      })();
    }
  }, []);
  return (
    <>
      <BeeBackground />
      <CenterContent>
        <ColumFlexContainer>
          <LogoWithSlogan slogan={slogan} />
          <EasyLogin />
          <TestLogin size={4} />
        </ColumFlexContainer>
      </CenterContent>
    </>
  );
};

export default LoginPage;
