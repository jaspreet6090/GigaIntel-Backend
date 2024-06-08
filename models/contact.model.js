import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true
  },
  phone: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  spamReports: {
    type: Number,
    default: 0
  },
});

export const Contact = mongoose.model('Contact', contactSchema);
