import mongoose from "mongoose";

const db = () => {
  mongoose
    .connect(
      "mongodb+srv://harshwardhan847:B6x0rvFQCrIMeGS1@blogs.ph8zq4l.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected to DB");
    });
};

export default db;
