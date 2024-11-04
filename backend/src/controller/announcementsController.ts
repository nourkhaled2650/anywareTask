import { RequestHandler } from "express";
import AnnouncementsModel from "../models/announcements";
import createHttpError from "http-errors";
import mongoose from "mongoose";
// author:
// role:
// message:
export const getAnnouncements: RequestHandler = async (req, res, next) => {
  const limit = req.query.limit
    ? parseInt(req.query.limit as string)
    : undefined;
  try {
    if (limit !== undefined && (isNaN(limit) || limit < 0)) {
      throw new Error("Invalid limit value");
    }

    const query = AnnouncementsModel.find();
    if (limit) {
      query.limit(limit);
    }
    const announcements = await query.exec();
    res.status(200).json(announcements);
  } catch (error) {
    next(error);
  }
};

export const getAnnouncement: RequestHandler = async (req, res, next) => {
  const announcementId = req.params.announcementId;
  try {
    if (!mongoose.isValidObjectId(announcementId)) {
      console.log(announcementId);
      throw createHttpError(400, "invalid announcement Id");
    }
    const announcement = await AnnouncementsModel.findById(
      announcementId
    ).exec();
    if (!announcement) {
      throw createHttpError(404, "Announcement not found");
    }
    res.status(200).json(announcement);
  } catch (error) {
    next(error);
  }
};

export const createAnnouncement: RequestHandler = async (req, res, next) => {
  const author = req.body.author;
  const role = req.body.role;
  const message = req.body.message;

  try {
    if (!author || !role || !message) {
      const missingFields = [
        !author && "author",
        !role && "role",
        !message && "message",
      ]
        .filter(Boolean)
        .join(", ");

      throw createHttpError(400, `Missing required data: ${missingFields}`);
    }
    const newAnnouncement = await AnnouncementsModel.create({
      author: author,
      role: role,
      message: message,
    });
    res.status(200).json(newAnnouncement);
  } catch (error) {
    next(error);
  }
};

export const updateAnnouncement: RequestHandler = async (req, res, next) => {
  const announcementId = req.params.announcementId;
  const author = req.body.author;
  const role = req.body.role;
  const message = req.body.message;
  try {
    //#region validations
    if (!mongoose.isValidObjectId(announcementId)) {
      throw createHttpError(400, "invalid announcement Id");
    }
    if (!author || !role || !message) {
      const missingFields = [
        !author && "author",
        !role && "role",
        !message && "message",
      ]
        .filter(Boolean)
        .join(", ");

      throw createHttpError(400, `Missing required data: ${missingFields}`);
    }
    //#endregion validations

    const announcement = await AnnouncementsModel.findById(
      announcementId
    ).exec();
    if (!announcement) {
      throw createHttpError(404, "Announcement not found");
    }
    announcement.author = author;
    announcement.role = role;
    announcement.message = message;
    const updatedAnnouncement = await announcement.save();
    res.status(200).json(updatedAnnouncement);
  } catch (error) {
    next(error);
  }
};

export const deleteAnnouncement: RequestHandler = async (req, res, next) => {
  const announcementId = req.params.announcementId;

  try {
    if (!mongoose.isValidObjectId(announcementId)) {
      throw createHttpError(400, "invalid announcement Id");
    }
    const announcement = await AnnouncementsModel.findById(
      announcementId
    ).exec();

    if (!announcement) {
      throw createHttpError(404, "Announcement not found");
    }
    await AnnouncementsModel.findByIdAndDelete(announcementId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
