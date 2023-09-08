import { legacy_createStore as createStore } from "redux";

const reducerFunc = (
  state = { balance: 0, previous: [] },
  action
) => {
  if (action.type === "ADD") {
    return {
      balance: state.balance + action.payload,
      previous: [
        ...state.previous,
        action.payload,
      ],
    };
  } else {
    return state;
  }
};

const store = createStore(reducerFunc);
export default store;
