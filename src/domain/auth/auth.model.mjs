import db from "../../connections/mysql.mjs";

export const handleSignUp = async () => {
  const id = "123";
  const name = "tlh";
  const phone = "0349510201";
  const password = "0349510201";
  const email = "trieulehoang555@gmail.com";

  const [result] = await db.query(
    "INSERT INTO users (id, name, phone, password, email) VALUES (?, ?, ?, ?, ?)",
    [id, name, phone, password, email]
  );
  return { id: result.insertId };
};
const handleSignIn = () => {};
const handleRefreshToken = () => {};
const handleForgotPassword = () => {};
