import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  message: {
    type: String,
    required: [true, "message is required"],
  },
});
const Contact = mongoose.models.contacts || mongoose.model("contacts", schema);
export default Contact;
