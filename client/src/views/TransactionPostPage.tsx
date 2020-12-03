import React from 'react';
import TopNavBar from '@organisms/TopNavBar';
import CenterContent from '@molecules/CenterContent';
import CreateTransactionHeader from '@organisms/CreateTransactionHeader';
// import TransactionForm from '@organisms/TransactionForm';
import CreateTransactionMenu from '@organisms/CreateTransactionMenu';

const TransactionPostPage: React.FC = () => {
  const onClick = () => {
    return true;
  };

  return (
    <>
      <CenterContent>
        <TopNavBar />
        <CreateTransactionHeader />
        {/* <TransactionForm
          categorys={['군것질', '교통비', '회식비']}
          payments={['카카오페이', '현금']}
          onClick={onClick}
          width="300px"
          height="500px"
        /> */}
        <CreateTransactionMenu submit={onClick} cancel={onClick} />
      </CenterContent>
    </>
  );
};

export default TransactionPostPage;
