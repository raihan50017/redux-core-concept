import { decrement, increment } from "../actions/type";

const initialState = {
  count: 200,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
