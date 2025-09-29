import {
  profileModal,
  updateProfileModal,
  getUserByIdModal,
} from "./user.model.mjs";
import { checkEmailExits, checkPhoneExits } from "../../utils/checkExits.mjs";
import {
  checkEnoughFields,
  checkRedundantField,
} from "../../utils/checkField.mjs";

export const profileService = async (id) => {
  const resProfileModal = await profileModal(id);
  if (resProfileModal) {
    return resProfileModal;
  } else {
    const error = new Error("User not found!");
    error.status = 401;
    throw error;
  }
};
export const updateProfileService = async (data, id) => {
  if (data) {
    const requiredFieldsUpdateProfile = ["avatar", "name"];
    checkRedundantField(requiredFieldsUpdateProfile, data);
    await updateProfileModal(data, id);
  } else {
    const error = new Error("Missing data!");
    error.status = 401;
    throw error;
  }
};
export const getUserByIdService = () => {};
