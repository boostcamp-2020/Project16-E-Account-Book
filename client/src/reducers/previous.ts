import { SET_PREVIOUS, setPrevious } from '@actions/previous/type';

type PreviousAction = ReturnType<typeof setPrevious>;

type PreviousState = {
  previous: string;
};

const initialState = {
  previous: '',
};

const previous = (state: PreviousState = initialState, action: PreviousAction): PreviousState => {
  switch (action.type) {
    case SET_PREVIOUS:
      return { previous: action.payload };
    default:
      return state;
  }
};

export default previous;
