export const SET_LIST = "set list"; // action type string

//action creator
export const setList = (items) => {
  return {
    type: SET_LIST,
    payload: items,
  };
};
