import express from "express";
import {
  getAllPlayers,
  searchPlayers,
  getPlayerDetails,
} from "../controllers/playerController.js";

const router = express.Router();

router.get("/", getAllPlayers);
router.get("/search", searchPlayers);
router.get("/:name", getPlayerDetails);

export default router;
