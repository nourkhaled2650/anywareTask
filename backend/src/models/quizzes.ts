import { InferSchemaType, model, Schema } from "mongoose";

const quizSchema = new Schema(
  {
    title: { type: String, required: true },
    course: { type: String, required: true },
    Topic: { type: String },
    dueDate: { type: String, required: true },
  },
  { timestamps: true }
);
type TQuiz = InferSchemaType<typeof quizSchema>;

export default model<TQuiz>("quizzes", quizSchema);
