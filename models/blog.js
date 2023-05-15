import mongoose from "mongoose";
import { Schema } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes:{
    type: Number,
    default: 0,
  },
  comments: [],
  image:{
    type: String,
  }

});

export default mongoose.model("Blog", blogSchema);
