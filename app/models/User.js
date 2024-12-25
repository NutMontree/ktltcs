import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const UserSchema = new Schema(
  {
    prefix: String,
    firstname: String,
    lastname: String,
    phone: Number,
    address: String,
    email: String,
    studentid: Number,
    department: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
