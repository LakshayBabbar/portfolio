import mongoose from "mongoose";

const schema = new mongoose.Schema({
  domain: {
    type: String,
    required: [true, "domain name is required"],
  },
  skills: {
    type: Array,
    required: [true, "skills are required"],
  },
});
const Skills = mongoose.models.skills || mongoose.model("skills", schema);
export default Skills;
