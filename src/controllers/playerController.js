import { players } from "../models/playerModels.js";

export const getAllPlayers = (req, res) => {
  res.render("player", { players });
};

export const searchPlayers = (req, res) => {
  const query = req.query.q ? req.query.q.toLowerCase() : "";
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(query)
  );
  res.render("searchResults", { players: filteredPlayers });
};

export const getPlayerDetails = (req, res) => {
  const playerName = req.params.name;
  const player = players.find((p) => p.name === playerName);
  if (player) {
    res.render("playerDetails", { player });
  } else {
    res.status(404).send("Player not found");
  }
};
