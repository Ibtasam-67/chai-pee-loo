const initialState = {
  data: [],
};
 
const teaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TEA":
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
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default teaReducer;
