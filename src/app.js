import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import playerRoutes from "./routes/playerRoutes.js";
import { getAllPlayers } from "./controllers/playerController.js";

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

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
