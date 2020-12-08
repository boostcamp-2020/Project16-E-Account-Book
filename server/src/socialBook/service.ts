import 'dotenv/config';
import sql from '../model/db';
import query from '../model/query';
import { UserImage, SocialInfo, SocialBookId } from '../interface/social';
import { getCategoryPercentData } from '../utils/accountbook';

export const getSocialBooks = async (userId: number) => {
  const socialBookList = await sql(query.READ_SOCIAL_BOOK_LIST, [userId]);
  const socialBookIdList = socialBookList.map((row: SocialBookId) => row.accountbook_id);
  const bookList = await sql(query.READ_SOCIAL_BOOK, [socialBookIdList]);
  return bookList;
};

export const getSocialBooksMaster = async (userId: number) => {
  const bookList = await sql(query.READ_SOCIAL_BOOK_MASTER, [userId]);
  return bookList;
};

export const getSocialBookUserImages = async (accountBookId: number) => {
  const imageList = await sql(query.READ_SOCIAL_BOOK_USER_IMAGES, [accountBookId]);
  const imageArray = imageList.map((row: UserImage) => row.picture);
  return imageArray;
};

export const getUserImages = async (socialBookList: SocialInfo[]) => {
  await Promise.all(
    socialBookList.map(async (socialBook: SocialInfo) => {
      const userImages = await getSocialBookUserImages(socialBook.id);
      socialBook.images = userImages;
      return socialBook;
    }),
  );
  return socialBookList;
};

export const getDailyTransactions = async (accountBookId: number, date: string) => {
  const transactionList = await sql(query.READ_DAILY_SOCIAL_BOOK, [accountBookId, date]);
  return transactionList;
};

export const getBelongSocialBookList = async (userId: number) => {
  const belongSocialBookList = await sql(query.READ_BELONG_SOCIAL_BOOK_LIST, [userId]);
  const bookIdList: number[] = [];
  belongSocialBookList.forEach((row: any) => {
    bookIdList.push(row.accountbook_id);
  });
  return bookIdList;
};

export const createTransaction = async (transaction: (string | number)[]) => {
  const result = await sql(query.CREATE_SOCIAL_TRANSACTION, transaction);
  return result.insertId;
};

export const getIncomeCategory = async (bookId: number, year: number, month: number) => {
  const result = await sql(query.READ_SOCIAL_INCOME_CATEGORY, [bookId, year, month]);
  const percentResult = getCategoryPercentData(result);
  return percentResult;
};

export const getExpenditureCategory = async (bookId: number, year: number, month: number) => {
  const result = await sql(query.READ_SOCIAL_EXPENDITURE_CATEGORY, [bookId, year, month]);
  const percentResult = getCategoryPercentData(result);
  return percentResult;
};
