import db from "../../connections/mysql.mjs";

export const profileModal = async (id) => {
  const [rows] = await db.query(
    "SELECT id, avatar, name, phone, email FROM users WHERE id = ? LIMIT 1",
    [id]
  );
  return rows.length ? rows[0] : null;
};
export const updateProfileModal = () => {};
export const getUserByIdModal = () => {};
