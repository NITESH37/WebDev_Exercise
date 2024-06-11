import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export const Book = mongoose.model("Book", bookSchema);
