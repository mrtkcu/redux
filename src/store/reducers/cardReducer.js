import { ADD_ITEM } from "../actions/cardActions";

const initialState = {
  card: [],
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        card: [action.payload, ...state.card],
      };

    default:
      return state;
  }
};
