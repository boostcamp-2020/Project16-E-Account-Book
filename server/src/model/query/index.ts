import privateBookQuery from './privateBookQuery';
import userQuery from './userQuery';
import socialBookQuery from './socialBookQuery';
import categoryQuery from './categoryQuery';
import paymentQuery from './paymentQuery';

const query = {
  ...privateBookQuery,
  ...userQuery,
  ...socialBookQuery,
  ...categoryQuery,
  ...paymentQuery,
};
export default query;
