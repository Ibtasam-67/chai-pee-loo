const initialState = {
  data: {}
};

const eveningTea = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EVENING_TYPE":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default eveningTea;
