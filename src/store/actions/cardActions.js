export const ADD_ITEM = "add item";

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
