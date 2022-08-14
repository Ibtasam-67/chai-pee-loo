export const getMorningType = (type) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_MORNING_TYPE",
      payload: type
    });
  } catch (err) {
    console.log(err);
  }
};
