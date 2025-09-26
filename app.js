import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/database.js";
dotenv.config();
const app = express();

connectDb();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
