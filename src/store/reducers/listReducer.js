import { SET_LIST } from "../actions/listActions";

//initial state tanımlamayı unutma
const initialState = {
  list: [],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};
