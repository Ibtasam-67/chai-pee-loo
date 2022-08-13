export const getType = (type) => async (dispatch) => {
  try {
      dispatch({
        type: "ADD_TYPE",
        payload: type
      });
    } catch (err) {
      console.log(err);
    }
  };
  