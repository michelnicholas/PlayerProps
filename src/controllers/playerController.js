const players = [
  { name: "LeBron James", team: "Lakers", points: 25 },
  { name: "Stephen Curry", team: "Warriors", points: 30 },
  // Add more players as needed
];

export const getAllPlayers = (req, res) => {
  res.render("player", { players });
};

export const searchPlayers = (req, res) => {
  const query = req.query.q.toLowerCase();
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(query)
  );
  res.render("player", { players: filteredPlayers });
};
