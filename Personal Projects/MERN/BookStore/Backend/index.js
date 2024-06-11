import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/index.js";
import bookRoutes from "./Routes/bookRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/book", bookRoutes);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

// import dotenv from "dotenv";
// import { connectDB } from "./config/index.js";
// import app from "./app.js";
// dotenv.config();
// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 7000, () => {
//       console.log(`SErver is running at port ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log("DAtabase Connection Failed", err);
//   });
