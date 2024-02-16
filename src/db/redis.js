import redis from "redis";
import "dotenv/config";

export const redisClient = redis.createClient({
  // For Redis Local instance
  // host: "localhost",
  // port: 6379,

  // For Redis Cloud instance
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOSTNAME,
    port: process.env.REDIS_PORT,
  },
});

await redisClient.connect().catch(console.error);
