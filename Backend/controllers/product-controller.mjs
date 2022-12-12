import { MongoClient } from "mongodb";

const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);

const featuredProducts = (req, res) => {
  const data = req.body;

  res.status(200).send("succesfully added");

  const url = req.protocol + "://" + req.get("host");

  const uploadImage = url + "/" + req.file.path;

  async function run() {
    try {
      await client.connect();

      const db = client.db("products");

      console.log(`succesfully connected to db ${db.databaseName}`);

      const productDetails = db.collection("productDetails");

      const cursorInsertion = await productDetails.insertOne({
        name: data.name,
        category: data.category,
        price: data.price,
        productDetails: data.productDetails,
        image: uploadImage,
      });
    } catch (err) {
      console.error(`we encountered ${err}`);
    } finally {
      client.close();
    }
  }
  run().catch(console.dir);
};

export default featuredProducts;
