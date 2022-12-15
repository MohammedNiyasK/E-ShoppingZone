import dotenv from "dotenv";
dotenv.config();

import { MongoClient } from "mongodb";
const uri = process.env.CONNECTION_URI;

export const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

let _db;

export  const dbo = {
    connectToServer:async function(){
        try {
            await client.connect()
            _db = client.db('Shopping_cart')
            console.log('succesfully connected to MongoDB')
            
        } catch (error) {
            console.error(`Error detected: ${error}`)
        }
    },
    getDb:function(){
        return _db
    }
}
