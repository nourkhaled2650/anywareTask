import express from "express";
import * as AnnouncementContoller from "../controller/announcementsController";

const router = express.Router();

router.get("/", AnnouncementContoller.getAnnouncements);

router.get("/:announcementId", AnnouncementContoller.getAnnouncement);

router.post("/", AnnouncementContoller.createAnnouncement);

router.patch("/:announcementId", AnnouncementContoller.updateAnnouncement);

router.delete("/:announcementId", AnnouncementContoller.deleteAnnouncement);

export default router;
