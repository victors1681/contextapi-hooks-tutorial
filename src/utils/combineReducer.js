const combineReducer = reducers => {
  const reducerKeys = Object.keys(reducers);

  return function combination(state = {}, action) {
    let nextState = state;

    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);

      nextState = { ...nextState, [key]: nextStateForKey };
    }
    return nextState;
  };
};

export default combineReducer;
