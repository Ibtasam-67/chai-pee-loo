const initialState = {
  data: {}
};

const morningTeaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MORNING_TYPE":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default morningTeaReducer;
