export const sqlConfig = {
  user: process.env.DB_USER || "vincent",
  password: process.env.DB_PASSWORD || "vincent123!@#",
  database: process.env.DB_NAME || "VINCENT",
  server: process.env.DB_SERVER || "18.181.40.63",
  port: 11433,
  pool: {
    max: 10,
    min: 0,
    // idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};
