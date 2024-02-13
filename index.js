import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";
import { createClient } from "redis";
import helmet from "helmet";
import { MenuRouter } from "./src/routes/menuRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});

const client = createClient();
await client.connect();

const getUserData = async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
    );
    await client.set(username, response.data.public_repos);
    res.send(setResponse(username, response.data.public_repos));
  } catch (error) {
    console.error(error);
    return;
  }
};

const cacheData = async (req, res, next) => {
  try {
    const { username } = req.params;
    const data = await client.get(username);
    if (data !== null) {
      res.send(setResponse(username, data));
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    return;
  }
};

const setResponse = (username, repos) => {
  return `<h2>${username} has ${repos} Github Repositories </h2>`;
};

app.get("/github/:username", cacheData, getUserData);
app.use("/menu/list", MenuRouter);
