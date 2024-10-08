import { Request, Response } from "express";
import { Launch } from "../models/launchModel";

export const getSavedLaunches = async (req: Request, res: Response) => {
  try {
    const launches = await Launch.find({});
    res.status(200).json(launches);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch launches" });
  }
};

export const saveLaunch = async (req: Request, res: Response) => {
  const { flight_number, name, date_utc } = req.body;
  try {
    const newLaunch = new Launch({ flight_number, name, date_utc });
    await newLaunch.save();
    res.status(201).json(newLaunch);
  } catch (error) {
    res.status(500).json({ error: "Failed to save launch" });
  }
};

export const deleteLaunch = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Launch.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete launch" });
  }
};
