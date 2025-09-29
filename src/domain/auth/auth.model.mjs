import db from "../../connections/mysql.mjs";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const signUpModal = async (data) => {
  const id = uuidv4();
  const hashedPassword = await bcrypt.hash(data?.password, 10);
  const [result] = await db.query(
    "INSERT INTO users (id, name, phone, password, email) VALUES (?, ?, ?, ?, ?)",
    [id, data.name, data.phone, hashedPassword, data.email]
  );
  return { id: result.insertId };
};
export const signInModal = async (data, id, password) => {
  const checkPassword = await bcrypt.compare(data?.password, password);
  if (checkPassword) {
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "";
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "";
    const expiresInAccessToken = "1h";
    const expiresInRefreshToken = "7h";
    return {
      access_token: jwt.sign({ id: id.toString() }, accessTokenSecret, {
        expiresIn: expiresInAccessToken,
      }),
      refresh_token: jwt.sign({ id: id.toString() }, refreshTokenSecret, {
        expiresIn: expiresInRefreshToken,
      }),
    };
  } else {
    const error = new Error("Invalid password!");
    error.status = 401;
    throw error;
  }
};
export const handleRefreshTokenModal = (rfToken) => {
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "";
  const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "";
  const expiresInAccessToken = "1h";
  const expiresInRefreshToken = "7h";
  const payload = jwt.verify(rfToken, refreshTokenSecret);

  if (payload) {
    return {
      access_token: jwt.sign({ id: payload?.id }, accessTokenSecret, {
        expiresIn: expiresInAccessToken,
      }),
      refresh_token: jwt.sign({ id: payload?.id }, refreshTokenSecret, {
        expiresIn: expiresInRefreshToken,
      }),
    };
  } else {
    const error = new Error("Invalid refresh_token!");
    error.status = 401;
    throw error;
  }
};
export const handleForgotPasswordModal = () => {};
