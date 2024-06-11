import { Book } from "../Model/bookSchema.js";

export const createBook = async (req, res) => {
  try {
    const { name, authorName, description } = req.body;

    const book = await new Book({ name, authorName, description }).save();
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
};
export const updateBook = async (req, res) => {
  try {
    const { name, authorName, description } = req.body;

    const book = await new Book.findByIdAndUpdate(
      req.params.id,
      { name, authorName, description },
      { new: true }
    );
    await book.save();
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
};
export const getAllBook = async (req, res) => {
  try {
    const book = await Book.find({}).sort({ createdAt: -1 });
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
};
