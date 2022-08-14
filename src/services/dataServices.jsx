import axios from "axios";
import {
  BASE_URL,
  SIGN_IN,
  SIGN_UP,
  CREATE_ORDER,
  UPDATE_ORDER_BY_ID,
  DELETE_ORDER,
  GET_EMPLOYE_ORDER,
} from "../utilities/constants";
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
    return await axios.post(BASE_URL + SIGN_IN, payload);
  } catch (error) {
    return error;
  }
};

export const createOrder = async (payload) => {
  try {
    return await axios.post(BASE_URL + CREATE_ORDER, payload, setHeaders());
  } catch (error) {
    return error;
  }
};
export const getEmployeeOrder = async (orderType, email) => {
  try {
    return await axios.get(
      ` ${BASE_URL}${GET_EMPLOYE_ORDER}?email=${email}&orderType=${orderType}`,
      setHeaders()
    );
  } catch (error) {
    return error;
  }
};

export const updateOrders = async (newOrder) => {
  try {
    return await axios.post(
      ` ${BASE_URL}${UPDATE_ORDER_BY_ID}${newOrder._id}`,
      newOrder,
      setHeaders()
    );
  } catch (error) {
    return error;
  }
};

export const deleteOrders = async (_id) => {
  try {
    return await axios.post(
      ` ${BASE_URL}${DELETE_ORDER}${_id}`,
      _id,
      setHeaders()
    );
  } catch (error) {
    return error;
  }
};
