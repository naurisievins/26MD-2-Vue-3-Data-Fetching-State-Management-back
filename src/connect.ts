import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.set("strictQuery", false);

const mongoConnect = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nrnk.zq3cas7.mongodb.net/angular-animals?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting", err);
    });
};

export default mongoConnect;
