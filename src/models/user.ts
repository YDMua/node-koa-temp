import { Schema, model } from "mongoose"

const userSchema = new Schema({
  user_name: { type: String, required: true },
  user_id: { type: Number, required: true },
  password: { type: String, required: true },
})

export const UserModel = model("User", userSchema)
