import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient, ServerApiVersion } from 'mongodb'

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// middlewars
app.use(cors())
app.use(express.json())

// database

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hjueq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const database = client.db('sportsDB');
    const sportsCollection = database.collection('equipments');
    const userCollection = database.collection("users");

    // equipment api
    app.get('/sports', async (req, res) => {
      const cursor = sportsCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // user api
    app.post('/users', async (req, res) => {
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });


  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);








app.get("/", (req, res) => {
  res.send("Server is on")
})

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
})

