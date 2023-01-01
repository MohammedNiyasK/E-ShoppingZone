import express from 'express'
const router = express.Router()
import multer from "multer";
import path from "path";
import { featuredProducts } from '../controllers/product-controller.mjs';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage: storage });

  router.post(
    "/",
    upload.single("image"),
    featuredProducts
  );

export default router;