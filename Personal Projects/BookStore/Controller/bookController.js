import { Book } from "../Model/bookSchema.js";

const createBook = async (req, res) => {
  try {
    const { name, price, authorName, publishYear } = req.body;
    const book = await new Book({
      name,
      price,
      authorName,
      publishYear,
    }).save();
    res.json(book);
  } catch (error) {
    console.log(error);
  }
};

export { createBook };
