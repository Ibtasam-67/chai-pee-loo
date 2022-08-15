const initialState = {
  data: {}
};

const LunchTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LUNCH_TYPE":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default LunchTypeReducer;
