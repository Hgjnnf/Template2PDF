export const initialState = {
  varList: [],
  file: null,
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_LIST":
      return {
        ...state,
        varList: payload,
      };
    case "CLEAR_LIST":
      return {
        ...state,
        varList: [],
      };
    case "SAVE_FILE":
      return {
        ...state,
        file: payload,
      };
    case "CLEAR_FILE":
      return {
        ...state,
        file: null,
      };
    default:
      alert(`No case for type ${type} found in reducer`);
  }
};
