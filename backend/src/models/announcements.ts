import { InferSchemaType, model, Schema } from "mongoose";

const announcementSchema = new Schema(
  {
    author: { type: String, required: true },
    role: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

type TAnnouncement = InferSchemaType<typeof announcementSchema>;

export default model<TAnnouncement>("announcements", announcementSchema);
