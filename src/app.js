import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//TO GET FORM DATA
app.use(express.json({ limit: "16kb" }));
//TO GET URL DATA FROM USER
app.use(express.urlencoded({ extended: true }, { limit: "16kb" }));
//TO SAVE TEMPORARY FILE IN LOCAL STORAGE
app.use(express.static("public/temp"));
//TO GET USER COOKIE
app.use(cookieParser());

export { app };
