export const getEveningType = (type) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_EVENING_TYPE",
      payload: type
    });
  } catch (err) {
    console.log(err);
  }
};
