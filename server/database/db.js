import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://PalakVerma:19raNqJONei3k59t@cluster0.126clot.mongodb.net/`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
