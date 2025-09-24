import db from "../connections/mysql.mjs";
export const checkEmailExits = async (email) => {
  const [rows] = await db.query(
    "SELECT id, name, phone, email, password FROM users WHERE email = ? LIMIT 1",
    [email]
  );
  console.log("rows", rows);

  return rows.length ? rows[0] : null;
};
