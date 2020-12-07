const categoryQuery = {
  READ_INCOME_CATEGORY: 'SELECT id, name FROM category WHERE assortment_id = 1',
  READ_EXPENDITURE_CATEGORY: 'SELECT id, name FROM category WHERE assortment_id = 2',
};

export default categoryQuery;
