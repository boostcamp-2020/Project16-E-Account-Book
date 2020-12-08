import * as response from '../utils/response';
import 'dotenv/config';
import * as Service from './service';
import { TransactionList } from '../interface/transaction';

export const createTransaction = async (ctx: any) => {
  const { accountbookId, categoryId, paymentId, date, title, amount } = ctx.request.body;
  const transaction = [accountbookId, categoryId, paymentId, date, title, amount];
  const result = await Service.createTransaction(transaction);
  response.success(ctx, result);
};

export const getTransactionList = async (ctx: any) => {
  const userId = ctx.userData.uid;
  const accountbookId = await Service.getAccountBookId(userId);
  const { year, month } = ctx.params;

  const searchInfo = [accountbookId, year, month];
  let result = await Service.getTransactionList(searchInfo);
  result = result.map((eachData: TransactionList) => {
    const inmoney = eachData.assortment === '수입' ? eachData.amount : 0;
    const exmoney = eachData.assortment === '지출' ? eachData.amount : 0;
    return {
      id: eachData.id,
      date: eachData.date,
      inmoney,
      exmoney,
      payment: eachData.name,
      category: eachData.category,
      title: eachData.title,
    };
  });
  response.success(ctx, result);
};
