import 'dotenv/config';
import sql from '../model/db';
import query from '../model/query';

export const getSocialBooks = async (userId: number) => {
  const socialBookList = await sql(query.READ_SOCIAL_BOOK_LIST, [userId]);
  const socialBookIdList = socialBookList.map((row: any) => row.accountbook_id);
  const bookList = await sql(query.READ_SOCIAL_BOOK, [socialBookIdList]);
  return bookList;
};

export const getSocialBooksMaster = async (userId: number) => {
  const bookList = await sql(query.READ_SOCIAL_BOOK_MASTER, [userId]);
  return bookList;
};

export const getSocialBookUserImages = async (accountBookId: number) => {
  const imageList = await sql(query.READ_SOCIAL_BOOK_USER_IMAGES, [accountBookId]);
  const imageArray = imageList.map((row: any) => row.picture);
  return imageArray;
};

export const getUserImages = async (socialBookList: any) => {
  await Promise.all(
    socialBookList.map(async (socialBook: any) => {
      const userImages = await getSocialBookUserImages(socialBook.id);
      socialBook.images = userImages;
      return socialBook;
    }),
  );
  return socialBookList;
};
