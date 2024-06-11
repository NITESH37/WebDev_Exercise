import { Router } from "express";
import {
  createBook,
  getAllBook,
  updateBook,
} from "../Controller/bookController.js";

const router = Router();

router.route("/add").post(createBook);
router.route("/update/:id").put(updateBook);
router.route("/get-all-book").get(getAllBook);

export default router;
