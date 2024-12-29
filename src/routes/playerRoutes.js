import express from "express";
import { getAllPlayers } from "../controllers/playerController.js";

const router = express.Router();

router.get("/", getAllPlayers);

export default router;
