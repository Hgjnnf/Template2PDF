export const initialState = {
  varList: [],
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_LIST":
      return {
        ...state,
        varList: payload.varList,
      };
    case "CLEAR_LIST":
      return {
        ...state,
        varList: [],
      };
    default:
      alert(`No case for type ${type} found in reducer`);
  }
};
