const initialState = {
  data: {},
};

const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TYPE":
      return {
        ...state,
        data: action.payload ,
      };
    default:
      return state;
  }
};

export default typeReducer;
