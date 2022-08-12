const initialState = {
    data: []
  };
  
  const teaReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TEA":
        return {
          ...state,
          data: [...state.data, action.payload]
        };
      default:
        return state;
    }
  };
  
  export default teaReducer;
  