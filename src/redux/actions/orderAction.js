export const addOrder = (tea) => async (dispatch) => {
    try {
      dispatch({
        type: "ADD_ORDER",
        payload: tea
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const deleteOrder = (id) => (dispatch) => {
    try {
      dispatch({
        type: "DELETE_ORDER",
        payload: id,
      });
    } catch (error) {}
  };
  export const updateOrder = (tea) => (dispatch) => {
    
    try {
      dispatch({
        type: "UPDATE_ORDER",
        payload: tea,
      });
    } catch (error) {
      console.log(error);
    }
  };