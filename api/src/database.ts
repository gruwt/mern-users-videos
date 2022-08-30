import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

(async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      authSource: "admin",
      // database: config.MONGO_DATABASE,
      // host: config.MONGO_HOST,
      user: config.MONGO_USER,
      pass: config.MONGO_PASSWORD,
    };

    const db = await mongoose.connect(
      `mongodb+srv://${config.MONGO_USER}:<${config.MONGO_PASSWORD}>${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
      mongooseOptions
    );

    console.log("Databse is connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
