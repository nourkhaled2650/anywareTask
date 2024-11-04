import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import quizRoutes from "./routes/quizRoutes";
import announcementRoutes from "./routes/announcementRoutes";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

//TODO: add user modal ,route and session base authentication

app.use("/quizzes", quizRoutes);
app.use("/announcements", announcementRoutes);

//end point not found error handler
app.use((req, res, next) => {
  next(createHttpError(404, "end point not found"));
});

//default error handler
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  let errorMessage = "an unknown error occurred";
  let statusCode = 500;
  if (isHttpError(err)) {
    errorMessage = err.message;
    statusCode = err.status;
  }
  res.status(statusCode).json({ error: errorMessage });
});
export default app;
