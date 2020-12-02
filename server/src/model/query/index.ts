import privateBookQuery from './privateBookQuery';
import userQuery from './userQuery';

const query = {
  ...privateBookQuery,
  ...userQuery,
};
export default query;
