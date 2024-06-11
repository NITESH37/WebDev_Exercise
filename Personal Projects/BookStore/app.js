import express from "express";

const app = express();

app.use(express.json());

import addbook from "./Routes/bookRoute.js";

// app.use("api/v1/books", addbook);

export default app;
