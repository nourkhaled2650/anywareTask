import { RequestHandler } from "express";
import QuizModel from "../models/quizzes";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getQuizzes: RequestHandler = async (req, res, next) => {
  const limit = req.query.limit
    ? parseInt(req.query.limit as string)
    : undefined;
  try {
    if (limit !== undefined && (isNaN(limit) || limit < 0)) {
      throw new Error("Invalid limit value");
    }
    const query = QuizModel.find();
    if (limit) {
      query.limit(limit);
    }
    const quizzes = await query.exec();
    res.status(200).json(quizzes);
  } catch (error) {
    next(error);
  }
};

export const getQuiz: RequestHandler = async (req, res, next) => {
  const quizId = req.params.quizId;
  console.log(quizId);
  try {
    if (!mongoose.isValidObjectId(quizId)) {
      throw createHttpError(400, "invalid quiz Id");
    }
    const quiz = await QuizModel.findById(quizId).exec();
    if (!quiz) {
      throw createHttpError(404, "quiz not found");
    }
    res.status(200).json(quiz);
  } catch (error) {
    next(error);
  }
};

export const createQuiz: RequestHandler = async (req, res, next) => {
  const title = req.body.title;
  const course = req.body.course;
  const Topic = req.body.Topic;
  const dueDate = req.body.dueDate;

  try {
    if (!title || !course || !Topic || !dueDate) {
      const missingFields = [
        !title && "title",
        !course && "course",
        !Topic && "Topic",
        !dueDate && "dueDate",
      ]
        .filter(Boolean)
        .join(", ");

      throw createHttpError(400, `Missing required data: ${missingFields}`);
    }
    const newQuiz = await QuizModel.create({
      title: title,
      course: course,
      Topic: Topic,
      dueDate: dueDate,
    });
    res.status(200).json(newQuiz);
  } catch (error) {
    next(error);
  }
};

export const updateQuiz: RequestHandler = async (req, res, next) => {
  const quizId = req.params.quizId;
  const title = req.body.title;
  const course = req.body.course;
  const Topic = req.body.Topic;
  const dueDate = req.body.dueDate;
  try {
    if (!mongoose.isValidObjectId(quizId)) {
      throw createHttpError(400, "invalid Quiz Id");
    }
    if (!title || !course || !Topic || !dueDate) {
      const missingFields = [
        !title && "title",
        !course && "course",
        !Topic && "Topic",
        !dueDate && "dueDate",
      ]
        .filter(Boolean)
        .join(", ");

      throw createHttpError(400, `Missing required data: ${missingFields}`);
    }
    const quiz = await QuizModel.findById(quizId).exec();
    if (!quiz) {
      throw createHttpError(404, "Quiz not found");
    }
    quiz.title = title;
    quiz.course = course;
    quiz.Topic = Topic;
    quiz.dueDate = dueDate;
    const updatedQuiz = await quiz.save();
    res.status(200).json(updatedQuiz);
  } catch (error) {
    next(error);
  }
};

export const deleteQuiz: RequestHandler = async (req, res, next) => {
  const quizId = req.params.quizId;
  try {
    if (!mongoose.isValidObjectId(quizId)) {
      throw createHttpError(400, "invalid Quiz Id");
    }
    const quiz = await QuizModel.findById(quizId).exec();

    if (!quiz) {
      throw createHttpError(404, "Quiz not found");
    }
    await QuizModel.findByIdAndDelete(quizId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
