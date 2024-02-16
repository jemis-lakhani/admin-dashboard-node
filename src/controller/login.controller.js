import { redisClient } from "../db/redis.js";

const checkUser = (username, password) => {
  if (
    (username === "user1" || username === "user2") &&
    password === "password1"
  )
    return true;
  else return false;
};

export const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  let response, status;
  const ip = req?.ip;

  if (!username || !password)
    res.status(400).json({ message: "Username or Password missing!" });

  // if (allowedIps.includes(ip)) {
  if (true) {
    if (checkUser(username, password)) {
      await redisClient.set(
        "log_login_success_" + `${Date.now()}`,
        JSON.stringify({
          username,
          time: new Date(),
          ip,
          message: "Successful Login.",
        })
      );
      req.session.isLoggedIn = true;
      req.session.username = username;
      response = {
        ip,
        username,
      };
      status = 200;
    } else {
      await redisClient.set(
        "log_login_failed_" + `${Date.now()}`,
        JSON.stringify({
          username,
          time: new Date(),
          ip,
          message: "Login Failed.",
        })
      );
      response = {
        message: "Invalid username or password.",
      };
      status = 401;
    }
  } else {
    response = { message: "You are not allowed!" };
    status = 405;
  }
  res.status(status).json(response);
};

export const adminLogout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    res.status(200).send("OK");
  });
};
