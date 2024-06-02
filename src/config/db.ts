import mongoose from "mongoose";

export default async function connectDb() {
  try {
    const URI = process.env.URI!;
    mongoose.connect(URI);
    const connection = mongoose.connection;
    connection.on("error", (err) => {
      console.log(err.message);
      process.exit();
    });
  } catch (error: any) {
    console.log(error.message);
  }
}
