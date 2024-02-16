import express from "express";
import { adminLogin, adminLogout } from "../controller/login.controller.js";

const router = express.Router();

router.post("/", adminLogin);
router.post("/logout", adminLogout);

export { router as LoginRouter };
