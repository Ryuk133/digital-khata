import express from "express";
import { getOwner } from "../controllers/ownerController.js";

const router = express.Router();

router.get("/owner", getOwner);

export default router;