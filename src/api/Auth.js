import axios from "axios";

import * as endpoints from "../constants/endpoints/auth";

export function handler(err) {
  let error = err;

  if (
    err.response &&
    err.response.data &&
    Object.prototype.hasOwnProperty.call(err.response.data, "message")
  )
    error = err.response.data;
  else if (!Object.prototype.hasOwnProperty.call(err, "message"))
    error = err.toJSON();

  return new Error(error.message);
}

export async function register(data) {
  try {
    const response = await axios.post(endpoints.REGISTER, data);

    return response.data;
  } catch (e) {
    throw handler(e);
  }
}

export async function login(data) {
  try {
    const response = await axios.post(endpoints.LOGIN, data);

    return response.data;
  } catch (e) {
    throw handler(e);
  }
}

export async function forgotPassword(data) {
  try {
    const response = await axios.post(endpoints.FORGOT_PASSWORD, data);

    return response.data;
  } catch (e) {
    throw handler(e);
  }
}
