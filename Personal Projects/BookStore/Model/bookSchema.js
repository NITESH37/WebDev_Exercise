import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  // publishYear: {
  //   type: Date,
  //   required: true,
  // },
});

export const Book = mongoose.model("Book", bookSchema);
