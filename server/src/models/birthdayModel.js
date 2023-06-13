import mongoose from "mongoose";

const birthdaySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  email:{
    type: String,
  },
  role:{
    type: String,
  }
});

export default mongoose.model("birthday", birthdaySchema);
