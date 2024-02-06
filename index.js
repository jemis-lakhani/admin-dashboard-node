const express = require("express");
const { fetch } = require("node-fetch");
// import fetch from "node-fetch";
const redis = require("redis");

const app = express();
const PORT = process.env.port || 5000;
const REDIS_PORT = process.env.port || 6379;

const client = redis.createClient(REDIS_PORT);

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});

const getUserData = async (req, res) => {
  try {
    const { username } = req.params;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    return;
  }
};

app.get("/github/:username", getUserData);

module.exports = app;
