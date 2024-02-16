import session from "express-session";
import RedisStore from "connect-redis";
import { redisClient } from "../db/redis.js";

const redisStore = new RedisStore({
  client: redisClient,
});

export const Session = session({
  store: redisStore,
  secret: "session-secret-key",
  resave: false,
  saveUninitialized: false,
  name: "sessionId",
  cookie: {
    secure: process.env.ENVIRONMENT === "production", // if true: only transmit cookie over https
    httpOnly: true, // if true: prevents client side js from reading the cookie
    maxAge: 5 * 60 * 1000, // 5 minute
    sameSite: "none",
  },
});
