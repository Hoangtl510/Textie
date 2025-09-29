import {
  signUpModal,
  signInModal,
  handleRefreshTokenModal,
} from "./auth.model.mjs";
import { checkEmailExits, checkPhoneExits } from "../../utils/checkExits.mjs";
import {
  checkEnoughFields,
  checkMissingField,
} from "../../utils/checkField.mjs";

export const signUpService = async (data) => {
  const requiredFieldsSignUp = ["name", "phone", "email", "password"];
  checkEnoughFields(requiredFieldsSignUp);
  checkMissingField(requiredFieldsSignUp);

  const resCheckEmail = await checkEmailExits(data?.email);
  const resCheckPhone = await checkPhoneExits(data?.phone);
  if (resCheckEmail?.id || resCheckPhone?.id) {
    const error = new Error(`Account already exists!`);
    error.status = 400;
    throw error;
  }
  await signUpModal(data);
};
export const signInService = async (data) => {
  const requiredFieldsSignIn = ["account", "password"];

  checkEnoughFields(requiredFieldsSignIn, data);
  checkMissingField(requiredFieldsSignIn, data);

  const resCheckEmail = await checkEmailExits(data?.account);
  const resCheckPhone = await checkPhoneExits(data?.account);

  const passwordSignIn = resCheckEmail?.password ?? resCheckPhone?.password;
  const idSignIn = resCheckEmail?.id ?? resCheckPhone?.id;
  if (idSignIn) {
    const res = await signInModal(data, idSignIn, passwordSignIn);
    return res;
  } else {
    const error = new Error(`Incorrect account!`);
    error.status = 401;
    throw error;
  }
};
export const refreshTokenService = (data) => {
  const requiredFieldsRefreshToken = ["refresh_token"];
  checkEnoughFields(requiredFieldsRefreshToken, data);
  checkMissingField(requiredFieldsRefreshToken, data);
  const res = handleRefreshTokenModal(data.refresh_token);
  return res;
};
export const forgotPasswordService = (data) => {
  const requiredFieldsRefreshToken = ["password"];
  checkEnoughFields(requiredFieldsRefreshToken, data);
  checkMissingField(requiredFieldsRefreshToken, data);
};
