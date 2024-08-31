import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.ts";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.use("/api/auth", authRouter);
