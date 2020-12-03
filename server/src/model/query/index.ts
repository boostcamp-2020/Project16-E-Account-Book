import privateBookQuery from './privateBookQuery';
import userQuery from './userQuery';
import socialBookQuery from './socialBookQuery';

const query = {
  ...privateBookQuery,
  ...userQuery,
  ...socialBookQuery,
};
export default query;
