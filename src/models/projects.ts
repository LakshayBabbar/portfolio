import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "project title is required"],
  },
  skills: {
    type: String,
    required: [true, "project skills is required"],
  },
  img: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  link: {
    type: String,
    required: [true, "project link is required"],
  },
  repo: {
    type: String,
    required: [true, "project repo is required"],
  },
});
const Project = mongoose.models.projects || mongoose.model("projects", schema);
export default Project;
