import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

const Admin = mongoose.models.admins || mongoose.model("admins", schema);
export default Admin;
