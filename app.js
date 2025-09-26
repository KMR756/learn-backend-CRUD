import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/database.js";
import userRouter from "./routes/user.route.js";
dotenv.config();
const app = express();

connectDb();

app.use(express.json());
app.use("/api/v1/user", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
