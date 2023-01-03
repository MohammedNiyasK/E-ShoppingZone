import jwt from "jsonwebtoken";
import { dbo } from "../model/config/connection.mjs";
const { getDb } = dbo;
import dotenv from "dotenv";
dotenv.config();

const handleRefreshToken = async (req, res) => {
  const db = getDb();
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  try {
    const foundUser = await db
      .collection("register")
      .findOne({ refreshToken: refreshToken });

    const roles = foundUser.roles;

    if (!foundUser) {
      return res.sendStatus(403);
    }

    //evaluate jwt
    const decoded = await jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    console.log(decoded)

    if (foundUser.username !== decoded.username) return res.sendStatus(403);

    const accessToken = jwt.sign(
      {
        userInfo: {
          'username': decoded.username,
          'roles': roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );
    res.json({ roles, accessToken });
  } catch (error) {
    res.json({message:error})
  }
};

export default handleRefreshToken;
