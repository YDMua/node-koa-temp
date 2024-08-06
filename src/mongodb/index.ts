import mongoose from "mongoose"

const uri = process.env.HOST_MONGO_URL || "mongodb://localhost:27017"

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, { dbName: "local-mongodb" })
    console.log("Connected to MongoDB with Mongoose")
  } catch (error) {
    console.error("Failed to connect to the database", error)
    throw error
  }
}
