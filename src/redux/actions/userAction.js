export const addUser = (user) => async (dispatch) => {
    try {
      dispatch({
        type: "ADD_ USER",
        payload: user
      });
    } catch (err) {
      console.log(err);
    }
  };
  