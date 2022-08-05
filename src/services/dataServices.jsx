import axios from "axios";
import { BASE_URL, LOGIN_IN, SIGN_UP } from "../utilities/constants";

export const signUp = async (payload) => {
  try {
    return await axios.post(BASE_URL + SIGN_UP, payload);
  } catch (error) {
    return error;
  }
};
export const login = async (payload) => {
  try {
    return await axios.post(BASE_URL + LOGIN_IN, payload);
  } catch (error) {
    return error;
  }
};
