import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/db.js";
import appRouter from "./routes/user.routes.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use("/api", appRouter);
connectDb();
app.listen(port, () => {
  console.log(`Server has started on ${port}`);
});
