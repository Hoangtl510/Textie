import db from "../connections/mysql.mjs";
export const checkEmailExits = async (email) => {
  const [rows] = await db.query(
    "SELECT id, name, phone, email, password FROM users WHERE email = ? LIMIT 1",
    [email]
  );

  return rows.length ? rows[0] : null;
};
export const checkPhoneExits = async (phone) => {
  const [rows] = await db.query(
    "SELECT id, name, phone, email, password FROM users WHERE phone = ? LIMIT 1",
    [phone]
  );
  return rows.length ? rows[0] : null;
};
