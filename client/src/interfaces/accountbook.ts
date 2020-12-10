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
  income: string | null;
  expenditure: string | null;
}
