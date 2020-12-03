type picture = string;

type userImages = picture[];

type socialBookId = number;

export interface UserImage {
  picture: picture;
}

export interface SocialBookId {
  accountbook_id: socialBookId;
}

export interface SocialInfo {
  id: socialBookId;
  name: string;
  description: string;
  color: string;
  incomeSum: string;
  expenditureSum: string;
  images?: userImages;
}
