import express from "express";
const app = express();
import cors from "cors";
import router from "./routes/routes.mjs";
import path from "path";
import { dbo } from "./model/config/connection.mjs";

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

dbo.getDb()

app.use("/public", express.static("public"));

app.use("/api", router);

const port = process.env.PORT || 3000;

app.listen(port,() =>{
  dbo.connectToServer((err) =>{
    if(err) console.error(err)
    else console.log('database connected succesfully')
  })
  console.log(`server is running at ${port}`)
})
