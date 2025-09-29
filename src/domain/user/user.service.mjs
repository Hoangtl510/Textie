import {
  profileModal,
  updateProfileModal,
  getUserByIdModal,
} from "./user.model.mjs";
import { checkEmailExits, checkPhoneExits } from "../../utils/checkExits.mjs";
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
export const updateProfileService = () => {};
export const getUserByIdService = () => {};
