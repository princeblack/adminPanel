import mongoose , {Mongoose} from "mongoose"

let cached = global.mongoose;
const MONGODB_URL = process.env.DB_URL
if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectDB = async () => {
  if (cached.conn) return cached.conn;


  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URL)
      .then((mongooseInstance) => {
        console.log("Database connected successfully");
        return mongooseInstance;
      })
      .catch((error) => {
        console.error("Database connection failed:", error);
        cached.promise = null; // Reset promise to allow retries
        throw error; // Rethrow the error for further handling
      });
  }
}