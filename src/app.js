import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import playerRoutes from "./routes/playerRoutes.js";

config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/players", playerRoutes);

const articles = [
  {
    title: "LeBron James: The King of the Court",
    content:
      "LeBron James continues to dominate the NBA with his incredible performances...",
  },
  {
    title: "Stephen Curry: The Three-Point Maestro",
    content:
      "Stephen Curry has revolutionized the game with his exceptional three-point shooting...",
  },
  {
    title: "Kevin Durant: The Scoring Machine",
    content:
      "Kevin Durant's scoring ability makes him one of the most unstoppable players in the league...",
  },
  // Add more articles as needed
];

app.get("/", (req, res) => {
  res.render("index", { players: [], articles });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
