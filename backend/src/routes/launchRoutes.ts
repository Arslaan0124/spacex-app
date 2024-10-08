import { Router } from "express";
import {
  getSavedLaunches,
  saveLaunch,
  deleteLaunch,
} from "../controllers/launchController";

export const launchRoutes = Router();

launchRoutes.get("/", getSavedLaunches);

launchRoutes.post("/", saveLaunch);

launchRoutes.delete("/:id", deleteLaunch);
