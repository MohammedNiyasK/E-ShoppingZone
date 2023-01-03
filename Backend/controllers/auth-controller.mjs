import bcrypt from "bcrypt";
import { dbo } from "../model/config/connection.mjs";
const { getDb } = dbo;
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const getAuthRouter = async (req, res) => {
  const db = getDb();

  const { user, password } = req.body;

  if (!user || !password)
    return res
      .status(400)
      .json({ message: "username and password are required" });

  try {
    const foundUser = await db
      .collection("register")
      .findOne({ username: user });

    if (!foundUser) return res.status(401).json({ message: "No user found" });

    const hashedPwd = foundUser.password;

    const match = await bcrypt.compare(password, hashedPwd);

    if (match) {
      const roles = foundUser.roles;

      //create JWT token

      const accessToken = jwt.sign(
        {
          userInfo: {
            'username': foundUser.username,
            'roles': roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );

      const refreshToken = jwt.sign(
        {
          'username': foundUser.username,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      //Saving refreshToken with current user

      db.collection("register").updateOne(
        { username: foundUser.username },
        { $set: { refreshToken: refreshToken } }
      );

      //Creates Secure Cookie with refresh token

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.json({ roles, accessToken });
    }
  } catch (error) {
    res.send(`error:${error.message}`);
  }
};

export default getAuthRouter;
