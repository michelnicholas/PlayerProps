import express from "express";
import {
  getAllNFLPlayers,
  getNFLPlayerDetails,
} from "../controllers/nflPlayerController.js";

const router = express.Router();

router.get("/", getAllNFLPlayers);
router.get("/:name", getNFLPlayerDetails);

export default router;
