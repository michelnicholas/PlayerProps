import { nflPlayers } from "../models/nflPlayerModels.js";

export const getAllNFLPlayers = (req, res) => {
  res.render("nflPlayer", { nflPlayers });
};

export const getNFLPlayerDetails = (req, res) => {
  const playerName = req.params.name;
  const player = nflPlayers.find((p) => p.name === playerName);
  if (player) {
    res.render("playerDetails", { player });
  } else {
    res.status(404).send("NFL Player not found");
  }
};
