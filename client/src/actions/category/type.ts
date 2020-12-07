import { ActionProps } from '@interfaces/action';

export const GET_CATEGORY = 'category/GET_CATEGORY' as const;

export const getCategory = (): ActionProps => ({
  type: GET_CATEGORY,
});
