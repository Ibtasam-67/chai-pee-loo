export const getLunchType = (type) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_LUNCH_TYPE",
      payload: type
    });
  } catch (err) {
    console.log(err);
  }
};
