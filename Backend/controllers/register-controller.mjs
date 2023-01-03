import { dbo } from "../model/config/connection.mjs";
import bcrypt from "bcrypt";
const saltRounds = 10;

const { getDb } = dbo;

const getRegisterRoute = async (req, res) => {
  const { user, email, password } = req.body;
  const db = getDb();
  const register = db.collection("register");

  try {
    const duplicate = await register.findOne({ username: user });
    if (duplicate) return res.json({ message: "User already existed" });

    const hashPwd = await bcrypt.hash(password, saltRounds);

    const response = await register.insertOne({
      username: user,
      email,
      password: hashPwd,
      roles:['user']
    });

    res.send(`registered succesfully ${user}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getRegisterRoute;
