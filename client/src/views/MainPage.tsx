import React from 'react';
import queryParser from '@utils/queryParser';

interface props {
  location: any;
}

const MainPage: React.FC<props> = ({ location }: props) => {
  if (location.search.length > 0) {
    const queryString = queryParser(location.search as string);
    document.cookie = `jwt=${queryString.get('jwt')}`;
  }

  return (
    <>
      <p>main page</p>
    </>
  );
};

export default MainPage;
