import {
  profileService,
  updateProfileService,
  getUserByIdService,
} from "./user.service.mjs";

export const profile = async (req, res) => {
  try {
    const resProfile = await profileService(req.user_id);
    res.status(200).json({ success: true, data: resProfile });
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ error: err.status ?? 500, message: err.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    await updateProfileService(req.body, req.user_id);
    res.status(200).json({ success: true });
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ error: err.status ?? 500, message: err.message });
  }
};

export const getUserById = async (req, res) => {};
