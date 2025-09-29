import db from "../../connections/mysql.mjs";

export const profileModal = async (id) => {
  const [rows] = await db.query(
    "SELECT id, avatar, name, phone, email FROM users WHERE id = ? LIMIT 1",
    [id]
  );
  return rows.length ? rows[0] : null;
};
export const updateProfileModal = async (data, id) => {
  let objKeyData = null;
  let objValueData = [];
  Object.keys(data).forEach((e) => {
    if (objKeyData) {
      objKeyData = `${objKeyData}, ${e} = ?`;
    } else {
      objKeyData = `${e} = ?`;
    }
    objValueData.push(data[e]);
  });
  objValueData.push(id);

  const [result] = await db.query(
    `UPDATE users SET ${objKeyData} WHERE id = ?`,
    objValueData
  );
  if (result.affectedRows === 0) {
    const error = new Error("User not found!");
    error.status = 401;
    throw error;
  } else {
    return;
  }
};
export const getUserByIdModal = () => {};
