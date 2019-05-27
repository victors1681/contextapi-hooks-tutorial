import React, { useReducer } from "react";
import MainContext from "./MainContext";
import childReducer from "./components/child/container/reducer";
import commentReducer, {
  key as commentKey
} from "./components/comments/container/reducer";
import ChildPerformances from "./components/child/container/performances";
import CommentsPerformances from "./components/comments/container/performances";
import combineReducer from "./utils/combineReducer";

const AppProvider = props => {
  const initialValue = {
    child: {
      name: "victor",
      posts: []
    },
    [commentKey]: {
      data: []
    }
  };

  const rootReducer = combineReducer({
    child: childReducer,
    [commentKey]: commentReducer
  });
  const [state, dispatch] = useReducer(rootReducer, initialValue);

  const myInitialState = {
    ...state,
    child: {
      ...state.child,
      ...ChildPerformances(dispatch)
    },
    [commentKey]: {
      ...state[commentKey],
      ...CommentsPerformances(dispatch)
    }
  };

  return (
    <MainContext.Provider displayName="Main Context" value={myInitialState}>
      {props.children}
    </MainContext.Provider>
  );
};

export default AppProvider;
