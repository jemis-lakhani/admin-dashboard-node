import express from "express";
import {
  getMenuItems,
  getNotifications,
} from "../controller/menu.controller.js";

const router = express.Router();

router.get("/", getMenuItems);
router.get("/notifications", getNotifications);

export { router as MenuRouter };
