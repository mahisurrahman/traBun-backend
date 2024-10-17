const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const dbInstance = await mongoose.connect(`${process.env.DB_URI}`);
    if (dbInstance) {
      console.log("Database Connected Successfully");
    }
  } catch (error) {
    console.log("DB Connection Failed", error);
    process.exit(1);
  }
};

module.exports = connectDb;
