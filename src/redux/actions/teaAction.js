export const addTea = (tea) => async (dispatch) => {
    try {
      dispatch({
        type: "ADD_TEA",
        payload: tea
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const deleteTea = (id) => (dispatch) => {
    try {
      dispatch({
        type: "DELETE_TEA",
        payload: id,
      });
    } catch (error) {}
  };
  export const updateTea = (tea) => (dispatch) => {
    
    try {
      dispatch({
        type: "UPDATE_TEA",
        payload: tea,
      });
    } catch (error) {
      console.log(error);
    }
  };