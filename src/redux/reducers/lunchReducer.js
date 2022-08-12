const initialState = {
  data: []
};

const lunchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LUNCH":
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};

export default lunchReducer;
