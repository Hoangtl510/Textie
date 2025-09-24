import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  try {
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "";
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      res.status(401).json({ error: "Authorization header is missing!" });
      return;
    }

    const token = authHeader.replace("Bearer ", "");

    const data = jwt.verify(token, accessTokenSecret);

    if (!data.id) {
      res.status(401).json({ error: "Invalid token!" });
      return;
    }

    req.user_id = data.id;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ error: "You do not have access!" });
  }
};
