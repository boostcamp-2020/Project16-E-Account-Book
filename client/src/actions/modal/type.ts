export const ACCOUNTBOOK_OPEN = 'modal/ACCOUNTBOOK_OPEN' as const;
export const ACCOUNTBOOK_CLOSE = 'modal/ACCOUNTBOOK_CLOSE' as const;

export const accountbookOpen = () => ({
  type: ACCOUNTBOOK_OPEN,
});

export const accountbookClose = () => ({
  type: ACCOUNTBOOK_CLOSE,
});
