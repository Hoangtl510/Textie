import { handleSignUp } from "./auth.model.mjs";
import { checkEmailExits } from "../../utils/checkExits.mjs";

export const singUpService = async (data) => {
  console.log("data", data);
  const requiredFieldsSignUp = ["name", "phone", "email", "password"];

  // check thiếu field
  for (const field of requiredFieldsSignUp) {
    if (!data[field]) {
      const error = new Error(`[${requiredFields.join(", ")}] is required!`);
      error.status = 400;
      throw error;
    }
  }

  //check thừa field
  const extraFields = Object.keys(data).filter(
    (key) => !requiredFieldsSignUp.includes(key)
  );

  if (extraFields.length > 0) {
    const error = new Error(
      `Extra fields not allowed: ${extraFields.join(", ")}`
    );
    error.status = 400;
    throw error;
  }

  //   await checkEmailExits("trieulehoang555@gmail.com");
};
const singIn = (req, res) => {};
const refreshToken = (req, res) => {};
const forgotPassword = (req, res) => {};
