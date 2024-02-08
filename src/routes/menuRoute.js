import express from "express";
import { getMenuItems } from "../controller/menu.controller.js";

const router = express.Router();

router.get("/", getMenuItems);

export { router as MenuRouter };
