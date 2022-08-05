import axios from "axios";
import { BASE_URL,SIGN_UP } from "../utilities/constants";

export const signUp = async (payload) => {
  try {
    return await axios.post(BASE_URL + SIGN_UP, payload);
  } catch (error) {
    return error;
  }
};
