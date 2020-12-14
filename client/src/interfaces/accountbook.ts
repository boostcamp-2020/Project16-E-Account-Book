export interface CategorySum {
  money: string;
  name: string;
}
export interface SocialBook {
  id: number;
  name: string;
  description: string;
  color: string;
  incomeSum: string | null;
  expenditureSum: string | null;
  images: string[];
}

export interface PrivateBook {
  category: CategorySum[];
  income: number | null;
  expenditure: number | null;
}

export interface Invitation {
  id: number;
  time: string;
  name: string;
  master: string;
}
