const initialState = {
  data: []
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case "DELETE_ORDER":
      return {
        ...state,
        data: state.data.filter((li) => li.id !== action.payload)
      };

    case "UPDATE_ORDER":
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};

export default orderReducer;
