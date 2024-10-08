import mongoose from "mongoose";

const launchSchema = new mongoose.Schema({
  flight_number: { type: Number, required: true },
  name: { type: String, required: true },
  date_utc: { type: Date, required: true },
});

export const Launch = mongoose.model("Launch", launchSchema);
