import { types } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case types.commentSuccess:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const key = "comments";
export default reducer;
