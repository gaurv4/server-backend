import express from "express";
import connectDB from "./config/db.js";
import { config } from "./config/config.js";
import router from "./routes/userRoutes.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: `${config.ORIGIN_CORS}` }));

app.use(express.json());

app.get('/', (req, res) => {
  res.send("<h1>Server is working!</h1>")
})

app.use("/api", router);

app.listen(5000, async () => {
  await connectDB()
  console.log(`server is running on http://localhost:${config.PORT}`);
});
