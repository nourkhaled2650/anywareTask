import express from "express";
import * as QuizController from "../controller/quizController";

const router = express.Router();

router.get("/", QuizController.getQuizzes);

router.get("/:quizId", QuizController.getQuiz);

router.post("/", QuizController.createQuiz);

router.patch("/:quizId", QuizController.updateQuiz);

router.delete("/:quizId", QuizController.deleteQuiz);

export default router;
