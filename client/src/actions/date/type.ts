import { ActionProps } from '@interfaces/action';

export const INIT_MONTH = 'month/INIT_MONTH' as const;
export const PRE_MONTH = 'month/PRE_MONTH' as const;
export const NEXT_MONTH = 'month/NEXT_MONTH' as const;

export const initMonth = (): ActionProps => ({
  type: INIT_MONTH,
});

export const subMonth = (): ActionProps => ({
  type: PRE_MONTH,
});

export const addMonth = (): ActionProps => ({
  type: NEXT_MONTH,
});
