import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifyJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer")) return res.sendStatus(401);

  const token = authHeader.split(" ")[1];

  try {
    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded.userInfo.username;
    req.roles = decoded.userInfo.roles;

    next();
    
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

export default verifyJWT;
