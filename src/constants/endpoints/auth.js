// eslint-disable-next-line no-unused-vars
import React from "react";
// API End Points
export const REGISTER = `${process.env.AUTH_API_URL}/auth/register`;
export const LOGIN = `${process.env.AUTH_API_URL}/auth/login`;
export const UPDATE_PROFILE = `${process.env.AUTH_API_URL}/user`;
export const UPLOAD_IMAGE = `${process.env.AUTH_API_URL}/user/upload`;
export const FORGOT_PASSWORD = `${process.env.AUTH_API_URL}/auth/recover`;
