import express from "express";
const router = express.Router();
import multer from "multer";
import path from "path";

import featuredProducts,{getFeaturedProducts , getSingleProduct} from "../controllers/product-controller.mjs";
import getRegisterRoute from "../controllers/register-controller.mjs";
import getAuthRouter from "../controllers/auth-controller.mjs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

/* Product related routes */

router.post(
  "/products/featuredProducts",
  upload.single("image"),
  featuredProducts
);

router.get('/products/getFeaturedProducts',getFeaturedProducts)

router.get('/products/getFeaturedProducts/:id',getSingleProduct)

/* Authentcation related routes */

router.post('/register',getRegisterRoute)

router.post('/auth',getAuthRouter)

export default router;
