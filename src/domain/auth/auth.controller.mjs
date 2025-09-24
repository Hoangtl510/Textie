import { singUpService } from "./auth.service.mjs";

export const signUp = async (req, res) => {
  try {
    const user = await singUpService(req.body); // gọi service
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    res.status(401).json({ error: 401, message: err.message });
  }
};
const singIn = (req, res) => {};
const refreshToken = (req, res) => {};
const forgotPassword = (req, res) => {};
