import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { dbo } from "./model/config/connection.mjs";
import verifyJWT from "./middleware/verifyJWT.mjs";
import registerRouter from "./routes/register.mjs";
import authRouter from "./routes/auth.mjs";
import postFeaturedProductsRouter from "./routes/postFeaturedProdcucts.mjs";
import featuredProductsRouter from "./routes/getFeaturedProducts.mjs";
import getSingleProduct from "./routes/getSingleProduct.mjs";
import refresh from "./routes/refresh.mjs";
import credentials from "./middleware/credentials.mjs";
import corsOptions from "./model/config/corsOptions.mjs";
import logoutRouter from "./routes/logout.mjs";

app.use(express.json());
app.use(credentials);
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

dbo.getDb();

app.use("/public", express.static("public"));

/*Routes */

/* Auth routes */
app.use("/api/register", registerRouter);
app.use("/api/auth", authRouter);
app.use("/api/refresh", refresh);
app.use("/api/logout", logoutRouter);

/* Featured products routes */

app.use("/api/products/getFeaturedProducts", featuredProductsRouter);
app.use("/", getSingleProduct);
 app.use(verifyJWT);
app.use("/api/products/featuredProducts", postFeaturedProductsRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  dbo.connectToServer((err) => {
    if (err) console.error(err);
    else console.log("database connected succesfully");
  });
  console.log(`server is running at ${port}`);
});
