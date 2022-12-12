import express from "express";
const app = express();
import cors from "cors";
import router from "./routes/routes.mjs";
import path from "path";

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

app.use("/api", router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
