const players = [
  { name: "LeBron James", team: "Lakers", points: 25 },
  { name: "Stephen Curry", team: "Warriors", points: 30 },
  // Add more players as needed
];

export const getAllPlayers = (req, res) => {
  res.render("player", { players });
};
