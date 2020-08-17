import axios from "axios";

import * as c from "../../constants/endpoints/auth";

export function handler(err) {
  let error = err;

  if (
    err.response &&
    Object.prototype.hasOwnProperty.call(err.response.data, "message")
  )
    error = err.response.data;
  else if (!Object.prototype.hasOwnProperty.call(err, "message"))
    error = err.toJSON();

  return new Error(error.message);
}

export async function register(data) {
  try {
    const res = await axios.post(c.REGISTER, data);

    return res.data;
  } catch (e) {
    throw handler(e);
  }
}

export async function login(data) {
  try {
    const res = await axios.post(c.LOGIN, data);

    return res.data;
  } catch (e) {
    throw handler(e);
  }
}

export async function forgotPassword(data) {
  try {
    const res = await axios.post(c.FORGOT_PASSWORD, data);

    return res.data;
  } catch (e) {
    throw handler(e);
  }
}
