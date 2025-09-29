import {
  signUpService,
  signInService,
  refreshTokenService,
  forgotPasswordService,
} from "./auth.service.mjs";

export const signUp = async (req, res) => {
  try {
    await signUpService(req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log("err", err);

    res
      .status(err.status ?? 500)
      .json({ error: err.status ?? 500, message: err.message });
  }
};
export const signIn = async (req, res) => {
  try {
    const resSignIn = await signInService(req.body);

    res.status(200).json({ success: true, data: resSignIn });
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ error: err.status ?? 500, message: err.message });
  }
};
export const refreshToken = async (req, res) => {
  try {
    const resRefreshToken = await refreshTokenService(req.body);

    res.status(200).json({ success: true, data: resRefreshToken });
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ error: err.status ?? 500, message: err.message });
  }
};
export const forgotPassword = async (req, res) => {
  try {
    await forgotPasswordService(req.body);

    res.status(200).json({ success: true });
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ error: err.status ?? 500, message: err.message });
  }
};
