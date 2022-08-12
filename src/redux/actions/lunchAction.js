export const addLunch = (text) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_LUNCH",
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};
