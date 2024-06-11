import { Router } from "express";
import { createBook } from "../Controller/bookController.js";

const router = Router();

router.route("/").post(createBook);

export default router;
