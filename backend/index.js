import express from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import todoRouter from "./routes/todos.js";
import cors from "cors";

config();

const app = express();

app.use(express.json());

app.use(cors())

connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/todos", todoRouter);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello world!" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
