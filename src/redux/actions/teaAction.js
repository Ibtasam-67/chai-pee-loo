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
  