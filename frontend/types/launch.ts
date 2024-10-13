export interface Launch {
  flight_number: number;
  name: string;
  date_utc: string;
  _id?: string; // for saved launches from MongoDB
}
