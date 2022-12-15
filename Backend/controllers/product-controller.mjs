import { dbo, client } from "../model/config/connection.mjs";
import {ObjectId} from 'mongodb'


const featuredProducts = async (req, res) => {
  const db_connect = dbo.getDb("Shopping_cart");
  const productDetails = db_connect.collection("productDetails");
  const data = req.body;

  res.status(200).send("succesfully added");

  const url = req.protocol + "://" + req.get("host");

  const uploadImage = url + "/" + req.file.path;

  try {
    const cursorInsertion = await productDetails.insertOne({
      name: data.name,
      category: data.category,
      price: data.price,
      productDetails: data.productDetails,
      image: uploadImage,
    });
  } catch (err) {
    console.error(`we encountered ${err}`);
  }
};

export const getFeaturedProducts = async (req, res) => {
  const db_connect = dbo.getDb();
  try {
    const result = await db_connect
      .collection("productDetails")
      .find({})
      .toArray();
   
    res.status(200).send(result);
  } catch (error) {
    console.error(`Error detected: ${error}`);
  }
};

 export const getSingleProduct = async (req,res) => {
  const db_connect = dbo.getDb()
  const id = req.params
 console.log(id)
  try {
   const result =await db_connect.collection('productDetails')
    .findOne({_id:new ObjectId(id)})
    res.status(200).send(result)

    console.log(result)
    
  } catch (error) {
    console.error(`Error detected : ${error}`)
  }
  
 }

export default featuredProducts;
