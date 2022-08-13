const initialState = {
  data: [],
};

const teaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Orders":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
      case "DELETE_TEA":
        return {
          ...state,
          data: state.data.filter((li) => li.id !== action.payload),
        };
    case "UPDATE_TEA":
      return {
        ...state,
        data: state.data.map((elm) =>
          elm.id === action.payload.id
            ? { ...elm, name: action.payload.name }
            : elm
        ),
      };
    default:
      return state;
  }
};

export default teaReducer;
