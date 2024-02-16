import express from "express";
import { getSettings } from "../controller/setting.controller.js";

const router = express.Router();

router.post("/", getSettings);

export { router as SettingRouter };
