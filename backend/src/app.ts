import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { launchRoutes } from "./routes/launchRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const mongoURI =
  process.env.DATABASE_URL || "mongodb://localhost:27017/spacex-launches";
mongoose
  .connect(mongoURI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

app.use("/api/launches", launchRoutes);

export default app;
