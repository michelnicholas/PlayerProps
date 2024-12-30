import express from "express";
import {
  getAllPlayers,
  searchPlayers,
} from "../controllers/playerController.js";

const router = express.Router();

router.get("/", getAllPlayers);
router.get("/search", searchPlayers);

export default router;
