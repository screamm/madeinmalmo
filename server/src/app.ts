import cors from "cors";
import express from "express";
import morgan from "morgan";
import rootRouter from "./routes/index";
import cookieParser from "cookie-parser";

const app = express();
// cookie parser for handle req.user
app.use(cookieParser());

// cors for proper handling
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Use dem routes
app.use(rootRouter);

export default app;
