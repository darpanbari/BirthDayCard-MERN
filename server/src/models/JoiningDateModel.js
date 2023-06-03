import mongoose from "mongoose";

const joiningDateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model('joiningDate', joiningDateSchema);