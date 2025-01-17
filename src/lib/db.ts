import mongoose, { Mongoose } from "mongoose";

declare global {
  // Extend the global namespace to include our cached connection object
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

// Use `globalThis` to handle TypeScript compatibility for global variables
let cached = globalThis.mongoose;

const MONGODB_URL = process.env.DB_URL || "";

if (!cached) {
  cached = globalThis.mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectDB = async (): Promise<Mongoose> => {
  if (cached.conn) {
    return cached.conn; // Return the cached connection if available
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URL, {})
      .then((mongooseInstance) => {
        console.log("Database connected successfully");
        return mongooseInstance;
      })
      
      .catch((error) => {
        console.error("Database connection failed:", error);
        cached.promise = null; // Reset the promise to allow retries
        throw error; // Rethrow the error for further handling
      });
  }

  cached.conn = await cached.promise; // Wait for the connection to resolve
  return cached.conn; // Return the established connection
};
