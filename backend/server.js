import express from "express";
import dotenv from "dotenv";

//initializing app
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());

//database connection

//routes

//server listen
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
