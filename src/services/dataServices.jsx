import axios from "axios";
import { BASE_URL, SIGN_IN, SIGN_UP } from "../utilities/constants";
import {setHeaders} from "../common/helpers/index"

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