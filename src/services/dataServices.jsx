import axios from "axios";
import { BASE_URL, SIGN_IN, SIGN_UP } from "../utilities/constants";
import { setHeaders } from "../common/helpers/index";

export const signUp = async (payload) => {
  try {
    return await axios.post(BASE_URL + SIGN_UP, payload);
  } catch (error) {
    return error;
  }
};
export const signIn = async (payload) => {
  try {
    return await axios.post(
      "https://lu-meal-stage.herokuapp.com/api/users/log-in  ",
      payload
    );
  } catch (error) {
    return error;
  }
};

export const createOrder = async (payload) => {
  try {
    return await axios.post(
      "https://lu-meal-stage.herokuapp.com/api/users/create-order",
      payload,
      setHeaders()
    );
  } catch (error) {
    return error;
  }
};
export const getEmployeeOrder = async (orderType, email) => {
  try {
    return await axios.get(
      `https://lu-meal-stage.herokuapp.com/api/users/get-employee-order?email=${email}&orderType=${orderType}`,
      setHeaders()
    );
  } catch (error) {
    return error;
  }
};

export const updateOrders = async (newOrder) => {
  try {
    return await axios.post(
      `https://lu-meal-stage.herokuapp.com/api/users/update-order-by-id/${newOrder._id}`,
      newOrder,
      setHeaders()
    );
  } catch (error) {
    return error;
  }
};

export const deleteOrders = async (id) => {
  try {
    return await axios.post(
      `https://lu-meal-stage.herokuapp.com/api/users/delete-order/${id}`,
      id,
      setHeaders()
    );
  } catch (error) {
    return error;
  }
};