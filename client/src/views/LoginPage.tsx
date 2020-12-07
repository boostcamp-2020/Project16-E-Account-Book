import React, { useEffect } from 'react';
import ColumFlexContainer from '@atoms/div/ColumnFlexContainer';
import LogoWithSlogan from '@organisms/LogoWithSlogan';
import CenterContent from '@molecules/CenterContent';
import BeeBackground from '@organisms/BeeBackground';
import EasyLogin from '@organisms/EasyLogin';
import { login } from '@actions/user/type';
import { useDispatch } from 'react-redux';
import qs from 'qs';
import axios from 'axios';
import * as API from '@utils/api';

interface props {
  location: any;
}

const LoginPage: React.FC<props> = ({ location }: props) => {
  const dispatch = useDispatch();

  const slogan = '지갑 속 꿀 같은 돈을 지키는 첫번째 방법';
  useEffect(() => {
    const { code, site, state }: any = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    const getJWT = async () => {
      const { data } = await axios.post(API.GET_JWT, {
        code,
        site,
        state,
      });
      return data;
    };
    if (code) {
      (async () => {
        const jwtToken = await getJWT();
        localStorage.setItem('jwt', jwtToken);
        dispatch(login());
        document.location.href = '/';
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
        </ColumFlexContainer>
      </CenterContent>
    </>
  );
};

export default LoginPage;
